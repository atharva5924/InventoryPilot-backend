import { Product } from "../models/Product.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const addProduct = asyncHandler(async (req, res) => {
  const { name, type, sku, description, quantity, price } = req.body;

  console.log(name, type, sku, description, quantity, price);

  if (!name || !type || !sku || !quantity || !price) {
    throw new ApiError(400, "Missing required fields");
  }

  const existing = await Product.findOne({ sku });
  if (existing) throw new ApiError(409, "Product with same SKU already exists");

  const image_url = req.file?.path;

  if (!image_url) {
    throw new ApiError(400, "Image is required");
  }

  const product = await Product.create({
    name,
    type,
    sku,
    description,
    quantity,
    price,
    image_url,
  });

  res.status(201).json({ message: "Product created", product_id: product._id });
});

export const updateQuantity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  if (typeof quantity !== "number") {
    throw new ApiError(400, "Quantity must be a number");
  }

  const product = await Product.findByIdAndUpdate(
    id,
    { quantity },
    { new: true }
  );

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  res
    .status(200)
    .json({ message: "Quantity updated", quantity: product.quantity });
});

export const getProducts = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const skip = (page - 1) * limit;
  const products = await Product.find().skip(skip).limit(limit);

  res.status(200).json(products);
});
export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);
  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  const { name, description, price, quantity, sku, type } = req.body;

  let imageUrl = product.image;

  if (req.file) {
    imageUrl = req.file.path; // Cloudinary URL from multer
  }

  product.name = name;
  product.description = description;
  product.price = price;
  product.quantity = quantity;
  product.sku = sku;
  product.type = type;
  product.image = imageUrl;

  await product.save();

  return res
    .status(200)
    .json(new ApiResponse(200, product, "Product updated successfully"));
});
// DELETE /products/:id
export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deleted = await Product.findByIdAndDelete(id);

  if (!deleted) throw new Error("Product not found");

  res
    .status(200)
    .json(new ApiResponse(200, null, "Product deleted successfully"));
});
