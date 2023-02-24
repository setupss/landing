import { connectToDatabase } from "../../../models/db"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = req.body.token;
    const parsetoken = JSON.parse(token)
    console.log(token + " This is from the get request")
    if (!parsetoken) {
        res.status(400).json({ message: "Please enter token" });
    }
    const { db, betaUsers } = await connectToDatabase();
    const result = await betaUsers.findOne({ token: parsetoken });
    // console.log(result)
    if (result) {
        res.status(201).json({ message: "User Found!", user: result });
    }
    else {
        res.status(201).json({ message: "Incorrect token" });
        console.log('Incorrect token')
    }
  }
}