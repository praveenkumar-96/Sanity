exports.config = {

  framework: 'jasmine',
  directConnect : true,
  //seleniumAddress = '',
  specs : ['supercalculator.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 900000
    
  },

  onPrepare: function() {
    // Override the timeout for webdriver.
    browser.driver.manage().timeouts().implicitlyWait(60000); 
  },

  capabilities:{

       browserName : 'chrome'
  }

  //capabilities: {
   // 'browserName': 'firefox',
     //'shardTestFiles': true,
    //'maxInstances': 1
  //}



 /* onPrepare: function() {
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'
      }));
    },

    onPrepare: function () {
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter());
      jasmine.getEnv().afterEach(function(done){
        browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
            return new Buffer(png, 'base64')
          }, 'image/png')();
          done();
        })
      });
    }*/

  };