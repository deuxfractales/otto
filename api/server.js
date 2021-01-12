require('dotenv').config()

const fastify = require('fastify')({
  logger: true
})

fastify.register(require('fastify-cookie'), {
  secret: 'test' 
})

fastify.register(require('fastify-cors'), {
  // put your options here
  // origin: `http://${process.env.IP}:8080`,
  origin: '*',  //`http://localhost:8080`,
  methods: ['GET,PUT,POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
});


fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.register(require("./db.js"))
fastify.register(require("./auth"))
fastify.register(require("./testRequest"))
fastify.register(require("./updateDB"))
fastify.register(require("./accountInfo"))


const start = async () => {
  try {
    await fastify.listen(8406)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
