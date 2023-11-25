import { AxiosInstance } from "axios";
import {
  ApiDataResponse,
  ApiError,
  ApiSuccessResponseDto,
} from "../types/response";
import { SuppliesForecastDto } from "../types/supplies";

const useSuppliesEndpoints = (apiClient: AxiosInstance) => {
  const baseUrl = "/supplies";

  const fetchSuppliesForecast = async (): Promise<
    ApiDataResponse<SuppliesForecastDto>
  > => {
    try {
      const response = await apiClient.get<
        ApiDataResponse<SuppliesForecastDto>
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
