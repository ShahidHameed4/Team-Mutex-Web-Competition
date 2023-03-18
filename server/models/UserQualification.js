import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userQualification = new Schema({
    title: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    company: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    userId: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    description: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    graduationDate: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
});

const UserQualification = mongoose.model("UserQualification", userQualification);
export default UserQualification;
