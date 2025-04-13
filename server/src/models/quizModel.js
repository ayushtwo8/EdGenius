import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    title: String,
    questions: [
        {
            question: String,
            options: [String],
            correctAnswer: Number
        }
    ],
    lectureId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Lecture'
    }
}, {
    timestamps: true
});

const quizModel = mongoose.Schema('Quiz', quizSchema);

export default quizModel;