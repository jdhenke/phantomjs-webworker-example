// create page to open our local website
var page = require('webpage').create();

// setup console message listener, printing webpage console messages to stdout
page.onConsoleMessage = function(msg, lineNum, sourceId) {
  console.log('console message: ' + msg);
};

// load page, wait 0.5s for main/worker back and forth, exit
page.open("http://localhost:8000/", function() {
  setTimeout(function() {
    phantom.exit();
  }, 500);
});
