async function login(page, username, password){

await page.goto('https://www.saucedemo.com/')

await page.fill('#user-name', username)
await page.fill('#password', password)

await page.click('#login-button')

}

module.exports = { login }

function generateEmail(){

const random = Math.floor(Math.random() * 10000)

return `user${random}@test.com`

}

module.exports = { generateEmail }

async function takeScreenshot(page,name){

await page.screenshot({ path: `screenshots/${name}.png` })

}

module.exports = { takeScreenshot }