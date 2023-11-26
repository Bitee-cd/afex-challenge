import { AxiosInstance } from "axios";
import {
  LatestTransactionData,
  PayoutLogsData,
  TransactionOverViewData,
} from "../types/transactions";
import { BaseApiResponse } from "../types/response";

const useTransactionEndpoints = (apiClient: AxiosInstance) => {
  const baseUrl = "/transactions";
  const fetchTransactionOverview = async (): Promise<
    BaseApiResponse<TransactionOverViewData[]>
  > => {
    try {
      const response = await apiClient.get<
        BaseApiResponse<TransactionOverViewData[]>
      >(`${baseUrl}/overview`);
      return response.data;
    } catch (error) {
      // Handle Error
      //   return extractErrorMessageFromAxiosErrorV2(error);
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const fetchLatestTransactions = async (): Promise<
    BaseApiResponse<LatestTransactionData[]>
  > => {
    try {
      const response = await apiClient.get<
        BaseApiResponse<LatestTransactionData[]>
      >(`${baseUrl}/latest`);
      return response.data;
    } catch (error) {
      // Handle Error
      //   return extractErrorMessageFromAxiosErrorV2(error);
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  const fetchPayOutLogs = async (): Promise<
    BaseApiResponse<PayoutLogsData[]>
  > => {
    try {
      const response = await apiClient.get<BaseApiResponse<PayoutLogsData[]>>(
        `${baseUrl}/payout-logs`
      );
      return response.data;
    } catch (error) {
      // Handle Error
      //   return extractErrorMessageFromAxiosErrorV2(error);
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  return { fetchTransactionOverview, fetchLatestTransactions, fetchPayOutLogs };
};
export default useTransactionEndpoints;
