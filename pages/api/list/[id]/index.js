import connectDB from "@/db";
import userModel from "@/models/user-model";

export default async function handler(req, res){
    if(req.method==="GET"){
        connectDB();
        if(req.query.id){
            const user= await userModel.findById(req.query.id);
            const list= user.tasks;
            return res.status(400).json({msg:"List is here..", details: list});
        }
    }
    if(req.method==="POST"){
        connectDB();
        const {title, description}= req.body;

        const data={
            "title":title,
            "description":description,
        }
        
        const user= await userModel.findById(req.query.id);
        const list= user.tasks;

        list.push(data);
        await user.save();

        return res.status(200).json({msg:"updated.."});
    }
    if(req.method==="DELETE"){
        connectDB();

        const {id}= req.body;
        const user= await userModel.findById(req.query.id);
        const list= user.tasks;

        const index= await list.findIndex(item=> item._id=== id);

        list.splice(index, 1);
        user.tasks= list;
        await user.save();
        return res.status(200).json({msg:"deleted.."});
    }
}