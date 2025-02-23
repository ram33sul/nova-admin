import { Dispatch, SetStateAction } from "react";
import { getFormDataVal } from "../../utils/formdata";
import toast from "react-hot-toast";
import { KycListParams, KycStatus } from "../../types/kyc";
import { putKycStatus } from "../../api/kyc_service";

export class Utils {
  constructor(
    public setKycListParams: Dispatch<SetStateAction<KycListParams>>,
    public setActionLoaders: Dispatch<SetStateAction<Set<string>>>,
    public setUpdatedStatuses: Dispatch<
      SetStateAction<Record<string, KycStatus>>
    >
  ) {}

  handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = getFormDataVal(formData, "name");
    const status = getFormDataVal(formData, "status") as KycStatus;
    this.setKycListParams((prev) => {
      return {
        ...prev,
        page: 0,
        name,
        status,
      };
    });
  };

  handlePageChange =
    (inc: number, isDisabled = false) =>
    () => {
      if (isDisabled) {
        return;
      }
      this.setKycListParams((prev) => {
        return {
          ...prev,
          page: prev.page + inc,
        };
      });
    };

  handleStatusChange = (kycId: string, status: KycStatus) => async () => {
    this.setActionLoaders((prev) => {
      const newLoaders = new Set([...prev]);
      newLoaders.add(kycId);
      return newLoaders;
    });
    const [response, error] = await putKycStatus({
      kycId,
      status,
    });
    if (error || !response?.isUpdated) {
      toast.error(error || "Cannot update status");
    }
    toast.success("Status Updated successfully");
    this.setUpdatedStatuses((prev) => {
      return {
        ...prev,
        [kycId]: status,
      };
    });
    this.setActionLoaders((prev) => {
      const newLoaders = new Set([...prev]);
      newLoaders.delete(kycId);
      return newLoaders;
    });
  };
}

export const dialCodeOptions = ["+971", "+91", "+1", "+61", "+966", "+44"].map(
  (dialCode) => ({ label: dialCode, value: dialCode })
);

export const kycStatusOptions = [
  { label: "All", value: "" },
  ...Object.keys(KycStatus).map((kycStatus) => ({
    label: kycStatus,
    value: kycStatus,
  })),
];
