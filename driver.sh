#!/bin/sh

# ensure dependencies are installed
npm install

# serve these static files on port 8000
python -m SimpleHTTPServer &> /dev/null & pid=$!

# run phantomjs script which opens the webpage, listening for console output
./node_modules/.bin/phantomjs client.js

# silently kill our simple server once phantomjs is done
kill -s 9 $pid 2> /dev/null; wait $pid 2>/dev/null
