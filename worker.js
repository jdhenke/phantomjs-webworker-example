// reply back to message with simple string
this.onmessage = function(evt) {
  postMessage("from worker!");
}
