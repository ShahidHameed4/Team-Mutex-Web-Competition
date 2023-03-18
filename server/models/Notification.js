import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Notification = new Schema({
    userId: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    description: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    type: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
}, { timestamps: true });

const notification = mongoose.model("Notification", Notification);
export default notification;