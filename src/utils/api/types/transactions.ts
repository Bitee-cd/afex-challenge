import { BaseApiResponse } from "./response";

export interface TransactionOverViewData {
  name: "active_users" | "transactions" | "cards_issued";
  current: number;
  last_month: number;
}

export interface LatestTransactionsDto {
  data: LatestTransactionData[];
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: string | null;
  prev_page_url: string | null;
  count: number;
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

export interface PayoutLogsData {
  date: string;
  salary_paid: number;
  cash_bond_bought: number;
}
