const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());


const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://atulsemwal77:x3xfkgFI0R7uWdSh@job-portal.hn98b1y.mongodb.net/?retryWrites=true&w=majority&appName=job-portal";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    // Create dataBase
    const db = client.db("mernjobPortal");
    const jobCollection = db.collection("demoJobs");

    // get all jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobCollection.find().toArray();
      res.send(jobs);
    });

    // Post a job
    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.createdAt = new Date();
      //  console.log(body)
      const result = await jobCollection.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: "Can not Insert ! try again later",
          status: false,
        });
      }
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Connected to Database");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// x3xfkgFI0R7uWdSh
// mongodb+srv://atulsemwal77:x3xfkgFI0R7uWdSh@job-portal.hn98b1y.mongodb.net/?retryWrites=true&w=majority&appName=job-portal
