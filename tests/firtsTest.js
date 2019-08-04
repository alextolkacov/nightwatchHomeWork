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
        const spinner = 'div[class="spinner-container"]'
        const sort = 'div[id="ddSortType"]'
        const low_price = 'a[id="price_low"]'
        const depart = ".//div[@class = 'flight-time flight-time-depart']"
        const arrive = 'div[class="flight-time flight-time-arrive"]'
        const duration = 'a[class="flight-duration otp-tooltip-trigger"]'
        const stops = 'div[class="flight-connection-container"]'
        const price = 'div[class=="price-point price-point-revised use-roundtrippricing"]'
        const departList = {}

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

            .elements('xpath', depart, function (item) {
                for (var i in item.value) {
                    console.log(item.value)
                }
            })



        // browser.execute(function () {
        //     var elements = document.getElementsByClassName('flight-time flight-time-depart');
        //     console.log(elements)
        //     return elements;
        // })
        // console.log(departList)

        // departList = browser.element(depart)
        // arrive_list = browser.element(arrive)
        // duration_list = browser.element(duration)
        // stops_list = browser.element(stops)
        // price_list = browser.element(price)
    }
}