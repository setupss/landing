import { connectToDatabase } from "../../models/db";

export default async function handler(req, res){
    if(req.method === "POST"){
        const email = req.body.email
        const passw = req.body.password
        if(!email || !passw){
            res.status(400).json({ message: "Please enter email, password and name" });

        }
        const data = {
            email: email,
            password: passw
        }
        const {db , betaUsers} = await connectToDatabase();
        const exists = await betaUsers.findOne({email: email});
        if(exists){
            res.status(201).json({ message: "Email already registered" });
        }else{
            const result = await betaUsers.insertOne(data);
            res.status(201).json({ message: "Data inserted!"});


        }
    }

}