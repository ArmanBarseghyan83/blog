import { MongoClient } from "mongodb";

// Validate user inputs and store to the database
async function hundler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      (!email || !email.includes("@") || !name || name.trim() === "",
        !message || message.trim() === "")
    ) {
      res.status(422).json({ message: "Invalid input!" });
      return;
    }
    const newMessage = { email, name, message };

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://Arman:anoosh2009@cluster0.bkb4tch.mongodb.net/blog?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Fail to connect to database." });
      return;
    }

    const db = client.db();

    try {
      await db.collection("message").insertOne(newMessage);
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Failed to store message.." });
      return;
    }
    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}

export default hundler;
