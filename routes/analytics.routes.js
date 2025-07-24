import express from "express";
import { getTopProductTypes } from "../controllers/analytics.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { requireAdmin } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/top-product-types", verifyJWT, requireAdmin, getTopProductTypes);

export default router;
