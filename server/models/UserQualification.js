import { Mongoose } from "mongoose";
const Schema = Mongoose.Schema;
const UserExperience = new Schema({
    title: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    company: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    userId: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    description: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    graduationDate: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
});

const userExperience = Mongoose.model("UserExperience", UserExperience);
export default userExperience;
