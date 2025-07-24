import mongoose,{Schema} from 'mongoose';

const productSchema = new Schema({
  name: String,
  type: String,
  sku: { type: String, unique: true },
  image_url: String,
  description: String,
  quantity: Number,
  price: Number
}, { timestamps: true });


export const Product = mongoose.model("Product", productSchema);
