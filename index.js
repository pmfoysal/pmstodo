require('dotenv').config();
const cors = require('cors');
const express = require('express');
const jwt = require('jsonwebtoken');
const getTodayTime = require('./utilities/getTodayTime');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;
const dbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.y2qwo.mongodb.net/?retryWrites=true&w=majority`;
const dbClient = new MongoClient(dbUri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(express.json());
app.use(cors({ origin: '*' }));

// [===>>>) Verification Middlewares Starts Here (<<<===] //

function verifyUser(req, res, nex) {
   const auth = req?.headers?.authorization;
   const res1 = { status: 401, message: "You don't have Authorization to access this API!" };
   const res2 = { status: 403, message: 'You have invalid Token to access this API!' };

   if (!auth) return res.status(401).send(res1);
   const token = auth.split(' ')[1];

   jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
      if (error) return res.status(403).send(res2);
      req.user = { ...decoded };
      nex();
   });
}

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
      // [===>>>) Database Collection Starts Here (<<<===] //
      await dbClient.connect();
      const dbTodos = dbClient.db('todo-220625').collection('todos');

      // [===>>>) Token Generating API Starts Here (<<<===] //
      app.post('/token', async (req, res) => {
         const user = req?.body;
         const token = jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: '10d' });
         res.send({ token });
      });

      // [===>>>) Getting User Details API Starts Here (<<<===] //
      app.get('/user', async (req, res) => {
         const auth = req?.headers?.authorization;
         const res1 = { status: 401, message: "You don't have Authorization to access this API!" };
         const res2 = { status: 403, message: 'You have invalid Token to access this API!' };

         if (!auth) return res.status(401).send(res1);
         const token = auth.split(' ')[1];

         jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
            if (error) return res.status(403).send(res2);
            const isAdmin = decoded?.email === process.env.ADMIN_EMAIL;
            res.send({ user: { ...decoded, isAdmin } });
         });
      });

      // [===>>>) Todos Starts Here (<<<===] //
      app.get('/todos/all', verifyUser, verifyAdmin, async (req, res) => {
         const data = await dbTodos.find({}).toArray();
         res.send(data.reverse());
      });

      app.get('/todos', verifyUser, async (req, res) => {
         const email = req?.user?.email;
         const data = await dbTodos.find({ email }).toArray();
         res.send(data.reverse());
      });

      app.get('/todos/today', verifyUser, async (req, res) => {
         const filter = {
            $query: {
               email: req?.user?.email,
               date: {
                  due: getTodayTime(),
               },
            },
            $orderby: {
               date: {
                  add: -1,
               },
            },
         };
         const data = await dbTodos.find(filter).toArray();
         res.send(data);
      });

      app.get('/todos/upcoming', verifyUser, async (req, res) => {
         const filter = {
            $query: {
               email: req?.user?.email,
               date: {
                  due: { $gt: getTodayTime() },
               },
            },
            $orderby: {
               date: {
                  due: 1,
               },
            },
         };
         const data = await dbTodos.find(filter).toArray();
         res.send(data);
      });

      app.get('/todos/overdue', verifyUser, async (req, res) => {
         const filter = {
            $query: {
               email: req?.user?.email,
               date: {
                  due: { $lt: getTodayTime() },
               },
            },
            $orderby: {
               date: {
                  due: 1,
               },
            },
         };
         const data = await dbTodos.find(filter).toArray();
         res.send(data);
      });

      app.get('/todos/archived', verifyUser, async (req, res) => {
         const filter = {
            $query: {
               email: req?.user?.email,
               isDone: true,
            },
            $orderby: {
               date: {
                  done: -1,
               },
            },
         };
         const data = await dbTodos.find(filter).toArray();
         res.send(data);
      });

      app.get('/todos/personal', verifyUser, async (req, res) => {
         const filter = {
            $query: {
               email: req?.user?.email,
               tag: 'personal',
            },
            $orderby: {
               date: {
                  due: 1,
               },
            },
         };
         const data = await dbTodos.find(filter).toArray();
         res.send(data);
      });

      app.get('/todo/:id', verifyUser, async (req, res) => {
         const filter = { _id: ObjectId(req?.params?.id) };
         const data = await dbTodos.findOne(filter);
         res.send(data);
      });

      app.post('/todo', verifyUser, async (req, res) => {
         const result = await dbTodos.insertOne(req?.body);
         res.send(result);
      });

      app.put('/todo/:id', verifyUser, async (req, res) => {
         const options = { upsert: true };
         const data = { $set: req?.body };
         const filter = { _id: ObjectId(req?.params?.id) };
         const result = await dbTodos.updateOne(filter, data, options);
         res.send(result);
      });

      app.delete('/todo/:id', verifyUser, async (req, res) => {
         const filter = { _id: ObjectId(req?.params?.id) };
         const result = await dbTodos.deleteOne(filter);
         res.send(result);
      });
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
