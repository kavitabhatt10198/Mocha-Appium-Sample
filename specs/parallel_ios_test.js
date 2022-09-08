const { default: driver } = require("appium-android-driver");
const { until } = require("selenium-webdriver");
const { By } = require("selenium-webdriver");
const by = require("selenium-webdriver/lib/by");



require('appium-base-driver')
var assert= require("assert"),
  webdriver = require("selenium-webdriver"),
   conf_file= process.argv[3] || "conf/parallel_ios.conf.js";
 

var capabilities = require("../" + conf_file).capabilities;

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

capabilities.forEach(function(caps) {

  describe( "Mocha iOS Parallel Test "+caps.browserName, function() {
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

          var button = driver.wait(until.elementLocated(By.xpath('//XCUIElementTypeStaticText[@name="GeoLocation"]')), 10000);
           button.click();
             console.log("Successfully clicked GeoLocation")
             driver.quit().then(function(){
            done();
        
        });
    
     });

    });

  });