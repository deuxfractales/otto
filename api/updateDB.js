async function updateDB(fastify, options) {
  const MongoClient = require("mongodb").MongoClient;
  const client = new MongoClient(process.env.MONGO_URI, {
    poolSize: 10,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  fastify.get("/updateDB/test", async (request, reply) => {
    return { hello: "world" };
  });

  fastify.post("/updateDB", async (request, reply) => {
    const { username, refresh } = request.body;
    try {
      await client.connect();
      const db = client.db("otto-users");
      const collection = db.collection("customer");

      
      let query = { username: username };

      const checkRefresh = await collection.findOne(query)

      if (checkRefresh.refreshToken) {
        console.log("found refresh")
        reply.send({
          msg: "refresh already found, no new tken issued",
          code: 1001
        })
      } else {

      let updateDB = { $set: { refreshToken: refresh } };
      const accountUpdate = await collection.updateOne(query, updateDB)

      if (accountUpdate.modifiedCount === 1) {
        console.log(
          `successfully added refresh token to ${request.body.username}'s account`
        );
      }
      }

      // reply.send(query)
    } catch (e) {
      console.log(e);
      reply.send(e);
    } finally {
      await client.close();
    }

    reply.send(
      `successfully added refresh token to ${request.body.username}'s account`
    );
  });
}

module.exports = updateDB;
