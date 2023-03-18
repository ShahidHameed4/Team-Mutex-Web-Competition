import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Analytics = new Schema({
    views: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    jobId: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    applied: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    hires: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
});


const analytics = mongoose.model("Analytics", Analytics);
export default analytics;
