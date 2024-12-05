import mongoose, { Schema } from "mongoose";

const adminschema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: false,
      default: "admin",
    },
  },
  { timestamps: true }
);

const adminData =
  mongoose.models.adminData || mongoose.model("adminData", adminschema);
export default adminData;
