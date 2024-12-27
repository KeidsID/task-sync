export type ResponseDto<T = unknown> = {
  success: boolean;
  data?: T;
  error?: { message: string; details?: unknown };
};
