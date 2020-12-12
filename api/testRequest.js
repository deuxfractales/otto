async function testRequest (fastify, options) {
  fastify.get('/testRequest', async (request, reply) => {
      reply.send(request)
  })
}

module.exports = testRequest

