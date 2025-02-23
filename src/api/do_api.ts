import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axios_instance";

export const doApi = async <T>(
  config: AxiosRequestConfig<any>
): Promise<[T | null, string | null]> => {
  try {
    const response = await axiosInstance(config);
    return [response.data, null];
  } catch (error) {
    const message =
      (error as any)?.response?.data?.message || "Something went wrong";
    return [null, message];
  }
};
