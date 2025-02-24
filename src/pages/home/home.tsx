import { useMemo, useState } from "react";
import { Utils, kycStatusOptions } from "./home.util";
import Button from "../../components/button/button.component";
import useApi from "../../custom_hooks/useApi";
import { getKycList } from "../../api/kyc_service";
import { Kyc, KycListParams, KycStatus } from "../../types/kyc";
import Input from "../../components/input/input.component";
import Select from "../../components/select/select.component";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Row from "./components/row";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../../Routes";

const PAGE_SIZE = 12;

export default function Home() {
  const navigate = useNavigate();

  const [kycListParams, setKycListParams] = useState<KycListParams>({
    name: "",
    status: "",
    page: 0,
    pageSize: PAGE_SIZE,
  });

  const [actionLoaders, setActionLoaders] = useState<Set<string>>(new Set());
  const [updatedStatuses, setUpdatedStatuses] = useState<
    Record<string, KycStatus>
  >({});

  const [kycList, kycListLoading] = useApi<{ kycList: Kyc[] }>(
    () => getKycList(kycListParams),
    { defaultValue: { kycList: [] } },
    [kycListParams]
  );

  const utils = useMemo(
    () => new Utils(setKycListParams, setActionLoaders, setUpdatedStatuses),
    []
  );

  const isNextDisabled = useMemo(
    () => (kycList?.kycList.length || 0) < PAGE_SIZE,
    [kycList?.kycList.length]
  );
  const isPrevDisabled = useMemo(
    () => kycListParams.page === 0,
    [kycListParams.page]
  );

  const toReport = () => {
    navigate(routePaths.REPORT);
  };

  return (
    <div className="mx-14 mt-6">
      <div className="flex justify-between">
        <form onSubmit={utils.handleSearch} className="flex gap-2">
          <Input name="name" label="Name" />
          <Select name="status" options={kycStatusOptions} />
          <Button loading={kycListLoading} className="px-4">
            Search
          </Button>
        </form>
        <div className="flex gap-2">
          <Button onClick={toReport}>View Report</Button>
          <div
            onClick={utils.handlePageChange(-1, isPrevDisabled)}
            className={`bg-black text-white dark:bg-white dark:text-black rounded-lg p-2 cursor-pointer ${
              isPrevDisabled ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            Prev
          </div>
          <div className="px-2">
            <div className="text-xs">Page</div>
            <div className="text-center">{kycListParams.page + 1}</div>
          </div>
          <div
            onClick={utils.handlePageChange(1, isNextDisabled)}
            className={`bg-black text-white dark:bg-white dark:text-black cur rounded-lg p-2 cursor-pointer ${
              isNextDisabled ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            Next
          </div>
        </div>
      </div>
      <table className="border-[1px] border-gray-500/25 rounded w-full box-border mt-4">
        <thead>
          <tr className="bg-gray-500/25">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Status</th>
            <th>Document</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {!kycListLoading
            ? kycList?.kycList?.map((kyc) => {
                return (
                  <Row
                    key={kyc._id}
                    kyc={kyc}
                    actionLoaders={actionLoaders}
                    updatedStatus={updatedStatuses[kyc._id]}
                    utils={utils}
                  />
                );
              })
            : null}
        </tbody>
      </table>
      {kycListLoading ? (
        <div className="p-4 bg-gray-500/20">
          <AiOutlineLoading3Quarters className="text-2xl animate-spin m-auto" />
        </div>
      ) : isNextDisabled ? (
        <div className="bg-gray-500/25 text-center mt-2 p-2">No More Data </div>
      ) : null}
    </div>
  );
}
