import { MongoClient } from 'mongodb'

// /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect(`mongodb+srv://${process.env.NEXT_PUBLIC_MONGODB_USER_NAME}:${process.env.NEXT_PUBLIC_MONGODB_USER_PASSWORD}@cluster0.bnhpu.mongodb.net/meetups?retryWrites=true&w=majority`);
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;
