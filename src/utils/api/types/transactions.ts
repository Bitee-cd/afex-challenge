import { BaseApiResponse } from "./response";

export interface TransactionOverviewDto extends BaseApiResponse {
  data: TransactionOverViewData[];
}

export interface TransactionOverViewData {
  name: "active_users" | "transactions" | "cards_issued";
  current: number;
  last_month: number;
}

export interface LatestTransactionsDto extends BaseApiResponse {
  data: LatestTransactionData[];
}

export interface LatestTransactionData {
  created_at: string;
  charged_by: {
    company: string;
    logo: string;
  };
  charge: {
    amount: number;
    currency: {
      code: string;
      sign: string;
    };
    type: "credit" | "debit";
  };
}
export interface PayoutLogsDto extends BaseApiResponse {
  data: PayoutLogsData[];
}

export interface PayoutLogsData {
  date: string;
  salary_paid: number;
  cash_bond_bought: number;
}
