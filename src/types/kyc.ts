export enum KycStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export enum KycSortBy {
  CREATED_ASC = "CREATED_ASC",
  CREATED_DESC = "CREATED_DESC",
}

export interface Kyc {
  _id: string;
  name: string;
  email: string;
  dialCode: string;
  mobile: string;
  status: KycStatus;
  url: string;
  urlType: string;
  createdAt: Date;
}

export interface KycListParams {
  status?: KycStatus | "";
  name?: string;
  sortBy?: KycSortBy;
  page: number;
  pageSize: number;
}

export interface KycReport {
  usersCount: number;
  kycsTotalCount: number;
  kycsPendingCount: number;
  kycsApprovedCount: number;
  kycsRejectedCount: number;
}
