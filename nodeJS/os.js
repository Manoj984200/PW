
// const os = require('os');

// console.log("Free:", os.freemem());
// console.log("Total:", os.uptime());
// Below program is used to simply explain how to send request and get response
const http = require('http');

const server = http.createServer((req, res) => { //here req of this callback used to request from server res is used to store response from server their position is fixed
    res.end("Hello Manoj");
});

server.listen(3000);

console.log("Server running on port 3000");