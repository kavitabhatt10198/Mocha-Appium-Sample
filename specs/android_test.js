const { default: driver } = require("appium-android-driver/build/lib/driver");
const { By } = require("selenium-webdriver");
const { capabilities } = require("../conf/android.conf");

require("appium-android-driver")
var assert= require("assert"),
  webdriver = require("selenium-webdriver"),
   conf_file= process.argv[3] || "conf/Appp.conf.js";
 

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


describe("Mocha Appium Test " + caps.browserName, function() {
  var driver;
  this.timeout(0);


    it ('Application is launched', function name(done) { 
        driver=buildDriver(caps);
      
        driver.findElement(By.id('com.lambdatest.proverbial:id/color')).click().then(function(){
        console.log("Successfully clicked Color");
    });
     driver.findElement(By.id('com.lambdatest.proverbial:id/Text')).click().then(function(){
        console.log("Successfully clicked Text");
    });
    driver.findElement(By.id('com.lambdatest.proverbial:id/notification')).click().then(function(){
        console.log("Successfully clicked Notification");
    })
    driver.findElement(By.id('com.lambdatest.proverbial:id/toast')).click().then(function(){
        console.log("Successfully clicked Toast");
        driver.quit()
    })
});


});
  

