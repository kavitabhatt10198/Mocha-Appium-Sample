LT_USERNAME = process.env.LT_USERNAME || "<your username>";
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "<your accessKey>";

var config = {
  commanCapabilities: {
    build: "Mocha-Android-Parallel-Sample", //Build name
    name: 'Mocha-Android parallel', // Test name
    tunnel: false, // Make it true to run the localhost through tunnel
    app : 'App_URL',
    isRealMobile : true,
    visual: false,  // To take step by step screenshot
    network:false,  // To capture network Logs
    console:false, // To capture console logs.
  },
  multiCapabilities: [
    {
      // Desired capabilities
      'platformName':'android', // OS name
      'deviceName': 'Galaxy S10', // Browser name
      'platformVersion': '11', // Browser version
      'browserName' : '',
    },
    {
        'platformName':'android', // OS name
        'deviceName': 'Galaxy S10+', // Browser name
        'platformVersion': '11', // Browser version
        'browserName' : '',
    }
  ]
};

exports.capabilities = [];
// Code to support common capabilities
config.multiCapabilities.forEach(function(caps) {
  var temp_caps = JSON.parse(JSON.stringify(config.commanCapabilities));
  for (var i in caps) temp_caps[i] = caps[i];
  exports.capabilities.push(temp_caps);
});