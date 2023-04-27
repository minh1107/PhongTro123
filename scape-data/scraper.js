const scrapeCategory  = async (browser, url) => {
    
    try {
        let page = await browser.newPage()
        console.log('Mở tab mới')
        await page.goto(url)
        console.log('Truy cập vào', url)
        await page.waitForSelector('#webpage')
        console.log("Web đã log xong")

        const dataCategory = await page.$$eval('#navbar-menu > ul > li' ,els => {
            dataCategory = els.map(el  => {
                return {
                    category: el.querySelector('a').innerText, 
                    link: el.querySelector('a').href,
                    class: el.className
                }
            })
            return dataCategory
        })
        console.log(dataCategory)

        await page.close()
    } catch (error) {
        console.log('scrape category: ',error)
    }
}

module.exports = {
    scrapeCategory
}