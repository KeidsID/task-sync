export type ResponseDto<T = unknown> = {
  success: boolean;
  data?: T;
  error?: unknown;
};
