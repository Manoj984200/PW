# Express Server
# Express Server

---

## 🎯 Purpose

This file creates and starts our Express application.

Although we named it

```
server.js
```

it can also be named

```
index.js

app.js

main.js
```

Server.js is only a naming convention.

---

## Code

```javascript
const express = require("express");

const app = express();

app.listen(5001, () => {
    console.log("Listening...");
});
```

---

## Line By Line

### Import Express

```javascript
const express = require("express");
```

Node.js does not know Express.

require() imports it.

---

### Create Application

```javascript
const app = express();
```

express() returns an Express Application Object.

We store it inside variable

```
app
```

app can be named anything.

Example

```
server

application

backend

xyz
```

Developers usually use

```
app
```

---

### Start Server

```javascript
app.listen(5001)
```

Starts the server.

Now Express waits for incoming requests.

---

## Internal Flow

```
Browser

↓

Request

↓

Express Server

↓

Waiting on Port 5001

↓

Response
```

---

## Common Confusion

Q.

Can we write

```javascript
express.listen()
```

No.

Because

express

is a function.

We first create an Express Application Object.

```
const app = express();
```

Only this object contains

```
listen()

get()

post()

put()

delete()
```

---

## 💼 Freelancing Importance

★★★★★

Every Express backend starts here.