const driver= require("appium-base-driver")

//const { default: driver } = require("appium-android-driver/build/lib/driver");
const { By } = require("selenium-webdriver");
const { element } = require("wd/lib/element-commands");

require("appium-base-driver")
var assert= require("assert"),
  webdriver = require("selenium-webdriver"),
   conf_file= process.argv[3] || "conf/ios.conf.js";
 

var caps = require("../" + conf_file).capabilities;

var buildDriver = function(caps) {
  return new webdriver.Builder()
    .usingServer(
      "http://" +
      LT_USERNAME +
      ":" +
      LT_ACCESS_KEY +
      "@mobile-hub.lambdatest.com/wd/hub"
    )
    .withCapabilities(caps)
    .build();
};

describe("Mocha Appium iOS Test " + caps.browserName, function() {
  var driver;
  this.timeout(0);
    it ('Application is launched', function name(done) { 
        driver=buildDriver(caps);
        driver.findElement(By.xpath('//XCUIElementTypeButton[@name="color"]')).click().then(function(){
          console.log("Successfully clicked Color");
        
        });
        driver.findElement(By.xpath('//XCUIElementTypeStaticText[@name="Notification"]')).click().then(function(){
          console.log("Successfully clicked Notification");
        });
        driver.findElement(By.xpath('//XCUIElementTypeStaticText[@name="Toast"]')).click().then(function(){
            console.log("Successfully clicked Toast");
    });
         driver.findElement(By.xpath('//XCUIElementTypeButton[@name="Text"]')).click().then(function(){
             console.log("Successfully clicked Text");
             driver.quit()
    });  
});
});


    
