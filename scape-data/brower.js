const puppeteer = require('puppeteer')

const startBrowser = async() => {
    let browser 
    try {
        browser = await puppeteer.launch({
            // Có hiển thị ui của browser hay không false là có
            headless: false,
            // Loại bỏ multiple layers của sandbox để tránh những nội dung web không đáng tin cậy
            args: ['--disable-setuid-sandbox'],
            // Bỏ qua lỗi bảo mật của https
            'ignoreHTTPSErrors': true 
        })
    } catch (error) {
        console.log('Không tạo được browser ', error)
    }
    return browser
}

module.exports = startBrowser