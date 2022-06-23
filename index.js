require('dotenv').config();
const cors = require('cors');
const express = require('express');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;
const dbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.y2qwo.mongodb.net/?retryWrites=true&w=majority`;
const dbClient = new MongoClient(dbUri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(express.json());
app.use(cors({ origin: '*' }));

// [===>>>) Verification Middlewares Starts Here (<<<===] //

function verifyAdmin(req, res, nex) {
   if (req?.user?.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).send({
         status: 403,
         message: 'Opps, Forbidden! You can not access Admins API!',
      });
   }
   nex();
}

async function runDatabase() {
   try {
      await dbClient.connect();
      // [===>>>) Database Collection Starts Here (<<<===] //
      const dbTodos = dbClient.db('todo-220625').collection('todos');
   } finally {
      // await client.close();
   }
}

runDatabase().catch(console.dir);

app.get('/', (req, res) => {
   res.send({ status: 200, port, message: 'Todoapp Server is Running...' });
});

app.listen(port, () => {
   console.log(`Todoapp Server Running... Port: ${port}`);
});
