import express from "express";
import {
  addProduct,
  updateQuantity,
  getProducts,
  updateProduct,
  deleteProduct
} from "../controllers/product.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../utils/multer.js";

const router = express.Router();

router.post("/", verifyJWT, upload.single("image"), addProduct);
// router.post("/", verifyJWT, addProduct);
router.put("/:id/quantity", verifyJWT, updateQuantity);
router.get("/", verifyJWT, getProducts);
router.put("/:id", verifyJWT, upload.single("image"), updateProduct);
router.delete("/:id", verifyJWT, deleteProduct);

export default router;
