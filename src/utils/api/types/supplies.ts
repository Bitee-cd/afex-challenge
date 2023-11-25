import { BaseApiResponse } from "./response";

export interface SuppliesForecastData {
  actual_value: number;
  forecasted_value: number;
  name: string;
  q1_variance: number;
  q2_variance: number;
  q3_variance: number;
  q4_variance: number;
}

export interface SuppliesForecastDto extends BaseApiResponse {
  created_at: Date;
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
  data: SuppliesForecastData[];
}
