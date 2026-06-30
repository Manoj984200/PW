# Environment Variables (.env)
# Environment Variables (.env)

---

## 🎯 Purpose

Sensitive information should never be written directly inside code.

Instead we store it inside

```
.env
```

Example

```
PORT=5001

USER=MANOJ
```

---

## Install

```bash
npm install dotenv
```

---

## Import

```javascript
const dotenv = require("dotenv");
```

---

## Load

```javascript
dotenv.config();
```

Without this line

```
process.env
```

will not read values from .env.

---

## Access Variable

```javascript
let port = process.env.PORT;

let user = process.env.USER;
```

---

## Why Use .env ?

Imagine tomorrow

Port changes

```
5001

↓

8000
```

Instead of editing code

Edit only

```
.env
```

---

## Real Projects

Store

- Database URL

- API Keys

- JWT Secret

- Passwords

- Port

---

## Must Remember

✔ dotenv.config() loads .env

✔ process.env reads variables

✔ Never upload .env to GitHub