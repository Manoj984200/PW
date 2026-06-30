# Routing
# Routing

---

## Purpose

Routing tells Express

"What should happen when a particular URL is requested?"

Example

```javascript
app.get("/getUser", getUser);
```

---

## Syntax

```javascript
app.get(path, callback)
```

or

```javascript
app.post(path, callback)
```

---

## Breakdown

### app

Express Application Object

---

### get()

Runs when browser sends GET request.

---

### /getUser

Endpoint

Express checks only this endpoint.

Not the complete URL.

Complete URL

```
http://localhost:5001/getUser
```

Express compares only

```
/getUser
```

---

### getUser

Callback Function

Defined inside

```
user.controller.js
```

Express calls it whenever request arrives.

---

## Internal Flow

Browser

↓

localhost:5001/getUser

↓

Express

↓

Match Endpoint

↓

Execute Controller

↓

Response

---

## Must Remember

GET → Read

POST → Create

PUT → Update

DELETE → Delete