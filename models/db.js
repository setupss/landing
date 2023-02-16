import { MongoClient } from "mongodb";

export async function connectToDatabase(){
    const client = await MongoClient.connect(process.env.MONGO_DB) // jsIxIsIvJYH5LTsp passw username: udhay

    const db = client.db("landing")

    const users = db.collection("landing-users")

    return {db, users}
    
}