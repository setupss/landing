import { connectToDatabase } from "../../models/db";


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }



export default async function handler(req , res){
    if(req.method === "POST"){
        const email = req.body.email
        const passw = req.body.password
        const name = req.body.name
        if(!email || !passw){
            res.status(400).json({ message: "Please enter email, password and name" });

        }
        const data = {
            _id: makeid(10),
            token: makeid(10),
            username: name,
            email: email,
            password: passw,
            
        }
        const {db , betaUsers} = await connectToDatabase();
        const exists = await betaUsers.findOne({email: email});
        if(exists){
            res.status(201).json({ message: "Email already registered" });
        }else{
            const result = await betaUsers.insertOne(data);
            res.status(201).json({ message: "Data inserted!", token: data.token });


        }
    }

}