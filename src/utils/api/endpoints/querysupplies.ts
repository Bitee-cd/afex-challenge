import { useQuery } from "react-query";
import { BaseApiResponse } from "../types/response";
import { SuppliesForecastData } from "../types/supplies";
import { baseURL } from "../api";

const useQuerySuppliesEndpoints = () => {
  const baseUrl = baseURL.live + "/supplies";

  const fetchSuppliesForecast = async (): Promise<
    BaseApiResponse<SuppliesForecastData[]>
  > => {
    try {
      const response = await fetch(`${baseUrl}/forecast`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  return { fetchSuppliesForecast };
};

export default useQuerySuppliesEndpoints;
