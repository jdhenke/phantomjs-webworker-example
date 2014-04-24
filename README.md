Simple setup to verify that PhantomJS does in fact support web workers.

## Usage

```bash
. driver.sh
```

Should see the following.

    $ . driver.sh
    console message: worker says "from worker!"

## Summary

We have a simple web page.
When the page loads, it creates a web worker and sends a message to it.
The web worker responds with a message, which the main then prints to its console.

To test this, we serve the webpage locally and spin up a PhantomJS instance, printing the webpage's console to stdout.
In other words, we print to the command line what the web page would print to its console.

Running this program should then show the message from the web worker. Cool.
