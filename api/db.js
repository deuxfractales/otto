async function db (fastify, options) {
  
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://admin:adminben@cluster0.vb0ok.mongodb.net/otto-users?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });


  fastify.get('/db', async (request, reply) => {    
    let databaseList = {} 
    try {
      await client.connect(); 
      const dbl = await client.db().admin().listDatabases();
      databaseList = dbl.databases
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
      reply.send(databaseList)
    }
  })

  fastify.post('/db/newUser', async (request,reply) => {
    newUser = {
      username: request.body.username,
      password: request.body.password
    } 
    
    try {
      await client.connect(); 
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
      reply.send(newUser)
    }
  })
  
}

module.exports = db
