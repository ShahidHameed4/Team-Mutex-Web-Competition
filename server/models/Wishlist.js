import { Mongoose } from "mongoose";
const Schema = Mongoose.Schema;
const Wishlist = new Schema({
    userId: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    jobId: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
});

const wishlist1 = Mongoose.model("Wishlist", Wishlist);
export default wishlist1;