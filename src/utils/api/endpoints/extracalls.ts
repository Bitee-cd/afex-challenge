import { AxiosInstance } from "axios";

export const useIncidentReportingEndpoint = (apiClient: AxiosInstance) => {
  const baseUrl = "/main/incident";

  const listIncidentTypes = async (): Promise<IncidentType[]> => {
    try {
      const response = await apiClient.get<ApiDataResponse<IncidentType[]>>(
        `${baseUrl}/types/list`,
        {}
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  };

  const listIncidentReports = async (): Promise<IncidentReport[]> => {
    try {
      const response = await apiClient.get<ApiDataResponse<IncidentReport[]>>(
        `${baseUrl}/reports/list`
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    listIncidentTypes,
    listIncidentReports,
  };
};
export interface ApiErrorResponse {
  message: string;
}

export interface ApiSuccessResponse {
  message: string;
}

export interface ApiDataResponse<T> {
  data: T;
  errorStatus: boolean;
  errorType: boolean;
  errorMessage: string | null;
}

export interface IncidentType {
  uid: string;
  label: string;
  icon?: string;
}

export interface IncidentReport {
  uid: string;
  report_statement: string;
  can_contact_later: boolean;
  state: string;
  lga: string;
  landmark?: string;
  normalized_address?: string;
  created_at: Date;
  last_modified_at: Date;
  // relations
  user_uid: string;
  location_uid: string;
  incident_type_uid: string;
  incidentType?: IncidentType;
}
