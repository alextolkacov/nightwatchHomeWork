module.exports = {
    "src_folders" : ["tests"],

        "webdriver" : {
        "start_process": true,
            "server_path": "C:/chromedriver.exe",
                "port": 9515
    },

    "test_settings" : {
        "default" : {
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        }
    }
}