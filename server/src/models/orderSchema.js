import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    course: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Course'
    },
    amountPaid: Number,
    paymentMethod: {
        type: String,
        default: 'razorpay'
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid', 'failed'],
        default: 'pending'
    },
    enrolledAt: {
        type: Date,
        default: Date.now
    },
    certificateIssued: {
        type: Boolean,
        default: false
    },
    progress: [{
        lectureId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' },
        watched: { type: Boolean, default: false},
        watchedAt: Date
    }]
});

const orderModel = mongoose.Schema('Order', orderSchema);

export default orderModel;