const fastify = require('fastify')({
  logger: true
})

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.register(require("./db.js"))
fastify.register(require("./auth"))

const start = async () => {
  try {
    await fastify.listen(8406)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
