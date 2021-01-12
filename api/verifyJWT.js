async function verifyJWT (fastify, options) {
  const jwt = require('json-web-token')  

  fastify.get('/verifyJWT', async (request, reply) => {
    let accessToken = req.cookies.jwt

    if(!accessToken){
      reply.code(403).send()
    }
    
    let payload
    try{ payload = jwt.verify(accessToken, process.env.JWT_KEY)
    }
  })
}

module.exports = verifyJWT
