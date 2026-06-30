// creating event 
var events = require("events");

var eventEmitter = new events.EventEmitter(); // event creation

eventEmitter.on("suraj", () => {  // event defination
    console.log("Suraj is a good boy");
});

eventEmitter.emit("suraj"); // event called ( it will print Suraj is a good boy)
