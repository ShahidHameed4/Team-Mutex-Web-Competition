import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema({
    name: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    description: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    type: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    location: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    minQualification: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    userId: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
}, { timestamps: true });

const job = mongoose.model("Job", Job);
export default job;
