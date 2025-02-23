import { KycListParams, KycStatus } from "../types/kyc";
import { doApi } from "../api/do_api";

export const getKycList = async (params: KycListParams) => {
  const url = "/authorized/kyc/list";
  const method = "GET";
  return await doApi<any>({
    method,
    url,
    params,
  });
};

export const putKycStatus = async (data: {
  kycId: string;
  status: KycStatus;
}) => {
  const url = "/authorized/kyc/status";
  const method = "PUT";
  return await doApi<any>({
    method,
    url,
    data,
  });
};
