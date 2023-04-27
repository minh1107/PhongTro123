const scrapers = require('./scraper') 

 const scrapeController = async(browserInstance) => {
    let url = 'https://phongtro123.com/'
    try {
        let browser = await browserInstance
        let categories = scrapers.scrapeCategory(browser, url)
        
    } catch (error) {
        console.log(error)
    }
 }

 module.exports = scrapeController