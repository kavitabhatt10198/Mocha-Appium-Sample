LT_USERNAME = process.env.LT_USERNAME || "<your username>";
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "<your accessKey>";

var config = {
  commanCapabilities: {
    'build': 'Mocha-iOS-Parallel-Sample', //Build name
    'name': 'Mocha-iOS-Parallel', // Test name
    'browserName' : '',
    'app' : 'App_URL',
    'isRealMobile' : true,
    'visual': false,  // To take step by step screenshot
    'network':false,  // To capture network Logs
    'console':false, // To capture console logs.
    'tunnel': false //
  },
  multiCapabilities: [
    {
      // Desired capabilities
      'platformName':'ios', // OS name
      'deviceName': 'iPhone XS', // Browser name
      'platformVersion': '13', // Browser version
    },
    {
        'platformName':'ios', // OS name
    'deviceName': 'iPhone 13 Pro', // Browser name
    'platformVersion': '15', // Browser version
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