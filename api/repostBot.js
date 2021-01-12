async function repostBot (fastify, options) {
  const puppeteer = require('puppeteer')

  fastify.get('/repostBot', async (request, reply) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage
    await page.goto('https://google.com')
    await broswer.close()
    return ("opened browser")
  })
}

module.exports = repostBot
