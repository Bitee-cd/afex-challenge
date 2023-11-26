import { AxiosInstance } from "axios";
import { ApiDataResponse, BaseApiResponse } from "../types/response";
import { SuppliesForecastData, SuppliesForecastDto } from "../types/supplies";

const useSuppliesEndpoints = (apiClient: AxiosInstance) => {
  const baseUrl = "/supplies";

  const fetchSuppliesForecast = async (): Promise<
    BaseApiResponse<SuppliesForecastData[]>
  > => {
    try {
      const response = await apiClient.get<
        BaseApiResponse<SuppliesForecastData[]>
      >(`${baseUrl}/forecast`);
      return response.data;
    } catch (error) {
      // Handle Error
      //   return extractErrorMessageFromAxiosErrorV2(error);
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  return { fetchSuppliesForecast };
};
export default useSuppliesEndpoints;
