const startBrowser = require('./brower')
const scrapeController = require('./scrapeController')

let browser = startBrowser()
scrapeController(browser)