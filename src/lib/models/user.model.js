import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: {
        type:String,
        required:true,
        unique:true,
    },
    email: {
        type:String,
        reuired:true,
    },
    firstName: {
        type:String,
        reuired:true,
    },
    lastName: {
        type:String,
        reuired:true,
    },
    username: {
        type:String,
        reuired:true,
    },
    avatar:{
        type:String,
        reuired :true,
    },
} , {timestamps : true});

export const User = mongoose.model.User || mongoose.model("User", userSchema);

export default User;