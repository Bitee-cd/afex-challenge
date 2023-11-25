import { ApiError } from "./types/response";

export function isSuccessfulApiResponse<T>(
  response: ApiError | T
): response is T {
  const result = (response as ApiError).error === undefined;
  return result;
}
