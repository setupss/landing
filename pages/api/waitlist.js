import { connectToDatabase } from "../../models/db"

export default async function handler(req, res){
    if(req.method === "POST"){
        const email = req.body.email
        const data = {
            email
        }
        // if no email is entertend then send message in json saying no email is enteted
        if(!email){
            res.status(201).json({ message: "Please enter an email id" })
        }

    
        const { db , users } = await connectToDatabase();
        const exsits = await users.findOne({email: email})
        if(exsits){
            res.status(201).json({ message: "Email already registered" })
        }else{
            const result = await users.insertOne(data)
            res.status(201).json({ message: "User pre-registered" })
            console.log(result)
        }


       
    }
   
}