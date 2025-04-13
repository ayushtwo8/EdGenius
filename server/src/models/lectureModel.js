import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    duration: String,
    isPreview: {
      type: Boolean,
      required: true,
    },
    resources: [String],
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
    },
  },
  { timestamps: true }
);

const lectureModel = mongoose.model('Lecture', lectureSchema);

export default lectureModel;