import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Course'
    },
    student: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    comment: String
}, {
    timestamps: true
});

const reviewModel = mongoose.Schema('Review', reviewSchema);

export default reviewModel;