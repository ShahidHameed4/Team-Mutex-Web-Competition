import Mongoose from "mongoose";
const Schema = Mongoose.Schema;
const UserSkills = new Schema({
    skill: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    userId: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
});


const userSkills = Mongoose.model("UserSkills", UserSkills);
export default userSkills;