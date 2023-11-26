import { AxiosInstance } from "axios";
import {
  ApiDataResponse,
  ApiError,
  ApiSuccessResponseDto,
} from "../types/response";
import {
  LatestTransactionsDto,
  PayoutLogsDto,
  TransactionOverviewDto,
} from "../types/transactions";

const useTransactionEndpoints = (apiClient: AxiosInstance) => {
  const baseUrl = "/transactions";
  const fetchTransactionOverview =
    async (): Promise<TransactionOverviewDto> => {
      try {
        const response = await apiClient.get<
          ApiDataResponse<TransactionOverviewDto>
        >(`${baseUrl}/overview`);
        return response.data.data;
      } catch (error) {
        // Handle Error
        //   return extractErrorMessageFromAxiosErrorV2(error);
        console.error("Error fetching data:", error);
        throw error;
      }
    };

  const fetchLatestTransactions = async (): Promise<LatestTransactionsDto> => {
    try {
      const response = await apiClient.get<
        ApiDataResponse<LatestTransactionsDto>
      >(`${baseUrl}/latest`);
      return response.data.data;
    } catch (error) {
      // Handle Error
      //   return extractErrorMessageFromAxiosErrorV2(error);
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  const fetchPayOutLogs = async (): Promise<PayoutLogsDto> => {
    try {
      const response = await apiClient.get<ApiDataResponse<PayoutLogsDto>>(
        `${baseUrl}/payout-logs`
      );
      return response.data.data;
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
