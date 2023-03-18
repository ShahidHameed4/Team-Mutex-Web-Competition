import mongoose from "mongoose";
const Schema = mongoose.Schema;
const UserExperience = new Schema({
    title: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    company: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    userId: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    timeto: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    timefrom: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    description: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
});


const userExperience = mongoose.model("UserExperience", UserExperience);
export default userExperience;
