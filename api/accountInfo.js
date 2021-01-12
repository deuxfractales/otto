async function accountInfo (fastify, options) {
  const jwt = require('jsonwebtoken')

  const MongoClient = require("mongodb").MongoClient;
  const client = new MongoClient(process.env.MONGO_URI, {
    poolSize: 10,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  fastify.addHook('onRequest', (request,reply,done) => {
    let accessToken = request.cookies.jwt

    if (!accessToken){
      reply.code(403).send()
    } else {
      let payload
      try{
        payload = jwt.veify(acessToken, process.env.JWT_KEY)
      }
      catch(e){
        reply.code(401).send(e)
      }
    }

    done()  
  })

  fastify.get('/accountInfo', async (request, reply) => {
    
      await client.connect();
      const db = client.db("otto-users");
      const collection = db.collection("customer");

    return { hello: 'world' }
  })



}

module.exports = accountInfo
