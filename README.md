Simple setup to verify that PhantomJS does in fact support web workers.

## Usage

```bash
. driver.sh
```

Should see the following.

    $ . driver.sh
    console message: worker says "from worker!"

## Summary

Serve `index.html` locally.
When the page loads, it creats a web server, sends a message to it.
The web worker responds with a message, which the main then prints to its console.

To test this, we spin up a PhantomJS instance, printing the webpage's console to stdout.
In other words, we print to the command line what the web page would print to its console.
