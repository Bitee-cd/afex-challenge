import {
  LatestTransactionData,
  PayoutLogsData,
  TransactionOverViewData,
} from "../types/transactions";
import { BaseApiResponse } from "../types/response";
import { baseURL } from "../api";

const baseUrl = baseURL.live + "/transactions";

const useQueryTransactionEndpoints = () => {
  const fetchTransactionOverview = async (): Promise<
    BaseApiResponse<TransactionOverViewData[]>
  > => {
    try {
      const response = await fetch(`${baseUrl}/overview`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  const fetchLatestTransactions = async (): Promise<
    BaseApiResponse<LatestTransactionData[]>
  > => {
    try {
      const response = await fetch(`${baseUrl}/latest`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  const fetchPayOutLogs = async (): Promise<
    BaseApiResponse<PayoutLogsData[]>
  > => {
    try {
      const response = await fetch(`${baseUrl}/payout-logs`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  return { fetchTransactionOverview, fetchLatestTransactions, fetchPayOutLogs };
};

export default useQueryTransactionEndpoints;
