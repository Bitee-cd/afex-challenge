export interface ApiDataResponse<T> {
  data: T;
}

export interface ApiError {
  error: string;
}
export interface BaseApiResponse {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: string | null;
  prev_page_url: string | null;
  count: number;
}

export interface ApiSuccessResponseDto<T> extends BaseApiResponse {
  data: T;
}
