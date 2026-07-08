# Controllers
# Controllers

---

## Purpose

Controllers contain Business Logic.

Instead of writing everything inside

```
server.js
```

we move logic into separate files.

---

## Example

server.js

```javascript
app.get("/getUser", getUser);
```

Controller

```javascript
function getUser(req,res){

res.send("PONG!");

}
```

---

## Why?

Imagine 100 APIs.

If everything stays inside

```
server.js
```

the file becomes thousands of lines long.

Controllers keep code clean.

---

## Flow

Browser

↓

Express

↓

Route

↓

Controller

↓

Database

↓

Controller

↓

Browser

---

## Real World

Express

↓

Receptionist

↓

Controller

↓

Teacher

↓

Records

---

## Must Remember

Routes decide

WHERE to go.

Controllers decide

WHAT to do.