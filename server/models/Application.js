import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Application = new Schema({
    userId: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    jobId: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    status: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
}, {timestamps: true});

const application = mongoose.model("Application", Application);
export default application;
