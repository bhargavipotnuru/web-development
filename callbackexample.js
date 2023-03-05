function doSomething(callback) {
  // perform some operations here
  console.log("Doing something...");
  // invoke the callback function
  callback();
}

function callbackFunction() {
  console.log("Callback function called.");
}

// call the doSomething function and pass the callback function as an argument
doSomething(callbackFunction);
