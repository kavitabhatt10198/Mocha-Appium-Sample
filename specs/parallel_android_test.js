const { default: driver } = require("appium-android-driver");
const { By } = require("selenium-webdriver");



require("appium-android-driver")
var assert= require("assert"),
  webdriver = require("selenium-webdriver"),
   conf_file= process.argv[3] || "conf/parallel_android.conf.js";
 

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

  

 
  describe( "Mocha Parallel Test "+caps.browserName, function() {
    var driver;
    this.timeout(0);

    it("Application is launched" + caps.browserName, function(done) {
      driver = buildDriver(caps);
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
    })

    driver.quit().then(function(){
       done();
    });
    
        });
    
     });

  });
      