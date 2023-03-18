import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Interview = new Schema({
    userId: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    jobId: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    status: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    date: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
}, {timestamps: true});

const interview = mongoose.model("Interview", Interview);
export default interview;
