import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    category: String,
    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },
    language: String,
    price: Number,
    isFree: {
      type: Boolean,
      default: false,
    },
    discount: {
      percent: Number,
      active: { type: Boolean, default: false },
      expiresAt: Date,
    },
    thumbnail: String,
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    curriculum: [
      {
        sectionTitle: String,
        lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lecture" }],
      },
    ],
    tags: [String],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    studentEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    rating: {
      type: Number,
      default: 0,
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const courseModel = mongoose.model("Course", courseSchema);

export default courseModel;
