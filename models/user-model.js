import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true,
    },
    email:{
        type:String,
        required: true,
        trim: true,
        unique: true,
    },
    password:{
        type: String,
        required:true,
        trim: true,
    },
    tasks:[
        {
            title:{
                type:String,
                required: true,
            },
            description:{
                type:String,
                required: true,
            }
        }
    ]
},{timestamps: true});

export default mongoose.models?.User || mongoose.model("User", userSchema);