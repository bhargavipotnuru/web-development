function displayMessage(message) {
    console.log(message);
  }
  
  function sendMessageWithDelay(message, delay) {
    setTimeout(displayMessage, delay, message);
  }
  
  sendMessageWithDelay("Hello friends", 1000); // Displays "Hello" after 1 second
  sendMessageWithDelay("Welcome to the class", 2000); // Displays "World" after 2 seconds
  sendMessageWithDelay("thank you sir", 3000); // Displays "Goodbye" after 3 seconds
  