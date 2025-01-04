// Global type definitions

declare namespace Express {
  interface Request {
    /** User id from auth */
    userId?: string;
  }
}
