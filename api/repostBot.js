async function repostBot (fastify, options) {
  const {Builder, By, Key, until} = require('selenium-webdriver');
  
  const users = [
    {
      username:'oototesterone',
      password: '123ABCabc123!'
    }
  ]

  fastify.get('/repostBot', async (request, reply) => {
      let driver = await new Builder().forBrowser('firefox').build();
    try {
      await driver.get('https://www.kijiji.ca/t-login.html');
      await driver.findElement(By.id('emailOrNickname')).sendKeys(users[0].username); 
      await driver.findElement(By.id('password')).sendKeys(users[0].password, Key.RETURN);
      await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
    await driver.quit();
    }
    return("complete")
  })
}

module.exports = repostBot
