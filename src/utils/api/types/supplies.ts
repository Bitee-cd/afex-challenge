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

export interface SuppliesForecastDto {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: string | null;
  prev_page_url: string | null;
  count: number;
  data: SuppliesForecastData[];
}
