# Run Selenium Tests With Mocha On LambdaTest

## Pre-requisites

Before getting started with Selenium automation testing on LambdaTest, you need to:

* Download and install **NodeJS**. You should be having **NodeJS v6** or newer. Click [here](https://nodejs.org/en/) to download.
* Make sure you are using the latest version of **JavaScript**.
* Install **npm** from the official website by clicking [here](https://www.npmjs.com/).
* Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website. Latest versions of **Selenium Client** and **WebDriver** are ideal for running your JavaScript automation testing script on LambdaTest’s Selenium Grid.

### Installing Dependencies and tutorial repo

**Step 1:** Install the required project dependencies using the command below:
```bash
npm i
npm install
npm install selenium-webdriver
npm i appium-android-driver
npm i appium-base-driver
npm install --save
```

### Setting up Your Authentication

Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest Appium Grid. You can obtain these credentials from the [LambdaTest App Automation Dashboard](https://appautomation.lambdatest.com/) or through [LambdaTest Profile](https://accounts.lambdatest.com/login/?utm_source=github&utm_medium=repo&utm_campaign=mocha-selenium-sample).

Set LambdaTest `Username` and `Access Key` in environment variables.

  * For **Linux/macOS**:
```js
export LT_USERNAME= "YOUR_LAMBDATEST_USERNAME" 
export LT_ACCESS_KEY= "YOUR_LAMBDATEST_ACCESS_KEY"
```

  * For **Windows**:

```js
$env:LT_USERNAME="YOUR_LAMBDATEST_USERNAME" 
$env:LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```
## Upload the app

Upload your iOS application (.ipa file) or android application (.apk file) to the LambdaTest servers using our REST API. You need to provide your Username and AccessKey in the format Username:AccessKey in the cURL command for authentication. Make sure to add the path of the appFile in the cURL request. Here is an example cURL request to upload your app using our REST API:

Using App File:

For Linux/macOS:

curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" \
--location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' \
--form 'name="Android_App"' \
--form 'appFile=@"/Users/macuser/Downloads/proverbial_android.apk"'
For Windows:

curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk""
Using App URL:

For Linux/macOS:

curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" \
--location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' \
--form 'name="Android_App"' \
--form 'url="https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk"'
For Windows:

curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -d "{"url":"https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk","name":"sample.apk"}"
Tip:

If you do not have any .apk or .ipa file, you can run your sample tests on LambdaTest by using our sample 🔗 Android app or sample 🔗 iOS app.
Response of above cURL will be a JSON object containing the App URL of the format - lt://APP123456789123456789 and will be used in the next step.

## Run Your First Test

### Sample Test with MochaJS

**Test Scenario:** We can check android_test.js for android test case and ios_test.js for iOS test case. 

### Configuration of Your Test Capabilities

In `conf/android.conf.js` file, you need to update your capabilities for android test. In this code, we are passing platformName, and deviceName information, platformVersion, along with LambdaTest Appium grid capabilities via capabilities object. The capabilities object in the above code are defined as:
android:
```js
exports.capabilities = {
  'build': 'Mocha-Appium-Sample', //Build name
  'name': 'Mocha-Android', // Test name
  'platformName':'android', // OS name
  'deviceName': 'Galaxy S10', //device model
  'platformVersion': '11', // Browser version
  'browserName' : '',// Browser name
  'app' : 'lt://APP10160601531662474162092882',//app ID for lambdatest
  'isRealMobile' : true, //Real device capability
  'visual': false,  // To take step by step screenshot
  'network':false,  // To capture network Logs
  'console':false, // To capture console logs.
  'tunnel': false // If you want to run the localhost than change it to true
};
```
iOS:
```js
exports.capabilities = {
 'build': 'Mocha-iOS-Sample', //Build name
  'name': 'Mocha-iOS', // Test name
  'platformName':'ios', // OS name
  'deviceName': 'iPhone 12 Pro', // Browser name
  'platformVersion': '15', //device model
  'browserName' : '',// Browser version
  'app' : 'lt://APP10160601531662542776407611',//app ID for lambdatest
  'isRealMobile' : true,//real device capability
  'visual': false,  // To take step by step screenshot
  'network':false,  // To capture network Logs
  'console':false, // To capture console logs.
  'tunnel': false // If you want to run the localhost than change it to true
};
```


> You can generate capabilities for your test requirements with the help of our inbuilt **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**.

## Executing the Test

The tests can be executed in the terminal using the following command.
```bash
android:

npm run android

iOS:

npm run ios
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest app automation dashboard](https://appautomation.lambdatest.com/). LambdaTest Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Running Your Parallel Tests Using Mocha Framework

### Setting up the Parallel Environment

**Test Scenario:** Check out the paralle_android.conf.js and parallel_ios.conf.js which would help you to run a single test on various devices at the same time.

## Executing Parallel Tests using Mocha

To run parallel tests using **Mocha**, we would have to execute the below command in the terminal:
```bash
npm run parallel_android

npm run parallel_ios


```
## End











# Project
