import { Product } from "../models/Product.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getTopProductTypes = asyncHandler(async (req, res) => {
  const topTypes = await Product.aggregate([
    {
      $group: {
        _id: "$type",
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
    {
      $project: {
        _id: 0,
        type: "$_id",
        count: 1,
      },
    },
  ]);

  res.status(200).json(topTypes);
});
