import { ApiError } from "../utils/ApiError.js";

export const requireAdmin = (req, res, next) => {
  if (req.user?.role !== "admin") {
    throw new ApiError(403, "Access denied: Admins only");
  }
  next();
};
