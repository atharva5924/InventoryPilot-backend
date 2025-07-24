import { Router } from "express";
const router = Router();
import {
  loginUser,
  registerUser,
  logoutUser,
  getCurrentUser,
} from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.post("/logout", logoutUser);
router.get("/me", verifyJWT, getCurrentUser);
export default router;
