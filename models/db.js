import { MongoClient } from "mongodb";

export async function connectToDatabase(){
    const client = await MongoClient.connect(process.env.MONGO_DB) 

    const db = client.db("landing")

    const users = db.collection("landing-users")
    const betaUsers = db.collection("users")

    return {db, users, betaUsers}
    
}