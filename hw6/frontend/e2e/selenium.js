const webdriver = require('selenium-webdriver')

const url = 'http://localhost:8080'

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build()

exports.driver = driver
exports.By = webdriver.By
exports.findxpath = xpath => driver.findElement(webdriver.By.xpath(xpath))
exports.findId = id => driver.findElement(webdriver.By.id(id))
exports.findCSS = css => driver.findElement(webdriver.By.css(css))
exports.go = _ => driver.navigate().to(url)
exports.sleep = millis => driver.sleep(millis)
