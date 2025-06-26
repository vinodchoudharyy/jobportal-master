import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default cloudinary;
