import connectDB from "@/db";
import User from "@/models/user-model";
import  bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export default async function handler(req, res){
    if(req.method==="POST"){
        connectDB();
        const {email, password}= req.body;
        if(!email || !password){
            return res.status(400).json({msg:"Email and password are necessary to login.."});
        }

        const emailExist=await User.findOne({email});
        if(!emailExist){
            return res.status(400).json({msg:"Please register first.."});
        }
        
        const passmatch=await bcrypt.compare(password, emailExist.password);
        if(!passmatch){
            return res.status(400).json({msg:"Invalid credentials.."});
        }

        const token= jwt.sign({token:emailExist._id}, process.env.JWT_SECRET , {expiresIn: "20d"});
        return res.status(200).json({msg:"Logged in successfully!", token, user: emailExist});
    }
}