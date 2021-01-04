async function updateDB (fastify, options) {
  
  const mongoose = require('mongoose')

  fastify.get('/updateDB/test', async (request, reply) => {
    return { hello: 'world' }
  })
 
  fastify.post('/updateDB', async (request,reply) => {
    try {
      await client.connect()
      const db = client.db('otto-users')
      const collection = db.collection('customer') 
      
      
      const { username,update } = request.body

      let query = {username: username}

      let updateDB = { $push: update }

      const accountUpdate = await collection.updateOne(query, updateDB)

      if (accountUpdate.modifiedCount === 1) {
        console.log(`successfully added ${update} to ${request.body.username}'s account`)
        reply.send(`successfully added ${update} to ${request.body.username}'s account`)
      }
      // reply.send(query)
    } catch (e) {
      console.log(e)
      reply.send(e)
    } finally {
      await client.close()
    }
  })
}

module.exports = updateDB
