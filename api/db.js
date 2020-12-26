async function db (fastify, options) {
  const dayjs = require('dayjs')
  const passGen = require('generate-password')

  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://admin:adminben@Cluster0.vb0ok.mongodb.net/otto-users?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { 
    poolSize:10,
    useNewUrlParser: true
  });


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
  
  fastify.post('/db/findUser', async (request,reply) => {
    reply.send(`this is the data on db: ${request.body}`)
  })

  fastify.post('/db/newUser', async (request,reply) => {
    newUser = {
      username: request.body.username,
      password: request.body.password,
      email: request.body.email
    } 
    
    try {
      await client.connect(); 
      const db = client.db('otto-users')
      const collection = db.collection('customer')
      collection.insertOne(newUser)
      // console.log(collection)
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
      reply.send(newUser)
    }
  })

  fastify.post('/db/newRepost', async (request,reply) => {

    const repostInfo = {
      startDate: dayjs().format('DD/MM/YY  hh:mmA'),
      endDate: dayjs().add(request.body.duration, 'day').format('DD/MM/YY  hh:mmA'),
      user: request.body.username,
      hash: passGen.generate({length:15, numbers:true})
    }

    try {
      await client.connect();
      const db0 = client.db('otto-users')
      const collection0 = db0.collection('customer')
      const db1 = client.db('Otto-Reposts')
      const collection1 = db1.collection('current')
     
      let query = { username:`${repostInfo.user}` }

      addRepost = await collection1.insertOne(repostInfo)
      
      if (addRepost.insertedCount === 1){
        console.log(`successfully added repost to db for user ${repostInfo.user} `)
      }

      let update = { $push: {reposts: `${repostInfo.hash}`} }
      
      accountUpdate = await collection0.updateOne(query, update)
      
      if (accountUpdate.modifiedCount === 1) {
        console.log(`successfully added repost to ${repostInfo.user}'s account`)
      } 
      // USE THIS FORMAT TO RUN "FIND" QUERY
      //findAll = await collection0.find(query).toArray(function (err,docs){
        //console.log(docs)
      //})
    } catch (e) {
      console.log(e)
    } finally {
      await client.close()
      reply.send(`successfully added repost to db, linked to ${repostInfo.user}'s account`) 
    }
  })
  
}

module.exports = db
