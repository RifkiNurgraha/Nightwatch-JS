const seleniumServerPath = './node_modules/selenium-server/lib/runner/selenium-server-standalone-3.7.1.jar';
const chromedriverPath = './node_modules/chromedriver/lib/chromedriver/chromedriver';
const geckodriverPath = './node_modules/geckodriver/geckodriver';
const cmd = require('node-cmd');

var checkChromeDriver = function() {
  console.log('Checking Chromedriver');
  require('fs').stat(chromedriverPath, function (err, stat) {
    if (err || !stat || stat.size < 1) {
    console.log('Downloading Chromedriver');
    downloadDriver('chromedriver');
    } else {
      console.log('Chromedriver is available at: ' + chromedriverPath);
    }
  });
};

var checkGeckoDriver = function() {
  console.log('Checking Geckodriver');
  require('fs').stat(geckodriverPath, function (err, stat) {
    if (err || !stat || stat.size < 1) {
      console.log('Downloading Geckodriver');
      downloadDriver('geckodriver');
    } else {
      console.log('Geckodriver is available at: ' + geckodriverPath);
    }
  });
};

var checkSeleniumServer = function() {
  console.log('Checking Selenium Server');
  require('fs').stat(seleniumServerPath, function (err, stat) {
    if (err || !stat || stat.size < 1) {
      console.log('Downloading Selenium Server');
      downloadDriver('selenium-server');
    } else {
      console.log('Selenium Server is available at: ' + seleniumServerPath);
    }
  });
};

var downloadDriver = function(modules) {
  cmd.get('npm install ' + modules, function(err, data, stderr){
    console.log(data);
    console.log(stderr);
    if (err !== null) {
      cmd.get('npm install ' + modules + ' --save-dev --no-bin-links', function(err, data, stderr){
        console.log(data);
        console.log(stderr);
      })
    };
  })
};

checkChromeDriver();
checkGeckoDriver();
checkSeleniumServer();