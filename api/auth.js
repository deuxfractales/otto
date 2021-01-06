async function auth(fastify, options) {
  const Joi = require("joi");
  const bcrypt = require("bcrypt");
  const axios = require("axios");
  const got = require("got");
  const jwt = require("jsonwebtoken");
  const cookieParser = require("cookie-parser");

  fastify.get("/auth", async (request, reply) => {
    return { hello: "world" };
  });

  fastify.post("/auth/login", async (request, reply) => {
    const { username, password } = request.body;

    try {
      const dbHash = await got(`http://localhost:8406/db/findUser/${username}`);
      bcrypt.compare(`${username}`, `${dbHash}`, async function (err, result) {
        if ((result = false)) {
          reply.send("wrong password");
        } else {
          console.log("successfully verified credentials");
          
          let payload = { username: username };
         
          const accessToken = jwt.sign(payload, process.env.JWT_KEY, {
            algorithm: "HS256",
            expiresIn: process.env.JWT_EXPIRY,
          });
          const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
            algorithm: "HS256",
            expiresIn: process.env.JWT_REFRESH,
          });
          try {
            postData = {
                username: username,
                update: {
                  refresh: refreshToken,
                }
              }
            
            const saveRefresh = await axios.post("http://localhost:8406/db/CRUDInfo", postData);
             console.log(saveRefresh.data);
          } catch (error) {
            console.log(error); /* handle error */
          }

          reply
            .setCookie("jwt", accessToken, { maxAge: process.env.JWT_EXPIRY })
            .send("cookie added");
        }
      });
    } catch (error) {
      reply.send("User Not Found");
    }
  });

  fastify.post("/auth/newUser", async (request, reply) => {
    const schema = Joi.object({
      username: Joi.string().alphanum().min(3).max(30).required(),

      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "ca"] },
      }),
    });

    const validate = await schema.validate({
      username: request.body.username,
      password: request.body.password,
      email: request.body.email,
    });

    if (validate.error) {
      reply.send("validation error");
    }

    await bcrypt.hash(request.body.password, 10, function (err, hash) {
      let newUser = {
        username: request.body.username,
        password: hash,
        email: request.body.email,
      };

      axios
        .post("http://localhost:8406/db/newUser", newUser)
        .then(async function (response) {
          if (response.data.password === hash) {
            reply.send(
              "successfully hashed password and saved user info to db"
            );
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  });
}

module.exports = auth;
