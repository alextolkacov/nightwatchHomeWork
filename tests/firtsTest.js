module.exports = {
    'My first test case'(browser) {
        const oneWay = 'label[for="oneway"]'
        const from = 'input[placeholder="From*"]'
        const to = 'input[placeholder="To*"]'
        const new_york = 'button[aria-label="New York, NY, US (JFK - Kennedy)"]'
        const miami = 'button[aria-label="Miami, FL, US (MIA - All Airports)"]'
        const departureDate = 'input[aria-label="Departure"]'
        const august20 = 'td[aria-label="Tuesday, August 20, 2019"]'
        const submit_btn = 'button[type="submit"]'
        const sort = 'div[id="ddSortType"]'
        const low_price = 'a[id="price_low"]'
        const depart = ".//div[@class = 'flight-time flight-time-depart']"
        const arrive = ".//div[@class = 'flight-time flight-time-arrive']"
        const stops = ".//div[@class = 'flight-connection-container']"
        const duration = ".//a[@title = 'On-time performance']"
        const table = ".//ul[@id = 'flight-result-list-revised']/li"

        browser
            .url('https://www.united.com')
            .maximizeWindow()
            .click(oneWay)
            .setValue(from, "JFK")
            .waitForElementVisible(new_york, 2000)
            .click(new_york)
            .setValue(to, "Miami")
            .waitForElementVisible(miami, 2000)
            .click(miami)
            .click(departureDate)
            .waitForElementVisible(august20, 2000)
            .click(august20)
            .click(submit_btn)

            .waitForElementVisible(sort, 20000)
            .click(sort)
            .click(low_price)

            .getText('xpath', table, body => {
                    for (let key in body) {
                        browser.text
                            .getText('xpath', depart, item => {
                                let val = item.value.split("\n");
                                console.log(val[1])
                            })
                            .getText('xpath', arrive, item => {
                                let val = item.value.split("\n");
                                console.log(val[1])
                            })
                            .getText('xpath', stops, item => {
                                let val = item.value.split("\n");
                                console.log(val[1])
                            })
                            .getText('xpath', duration, item => {
                                let val = item.value.split("\n");
                                console.log(val[0])
                            })
                    }
                }
            )
    }
}
