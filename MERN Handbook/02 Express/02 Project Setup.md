# Project Setup
# Express Project Setup

---

## 🎯 Purpose

Before writing Express code, we must prepare our project.

---

## Steps

### Step 1

Create a project folder

```bash
mkdir Express
```

---

### Step 2

Open the folder

```bash
cd Express
```

---

### Step 3

Initialize Node Project

```bash
npm init -y
```

This creates

```
package.json
```

This file stores

- Project Name
- Dependencies
- Scripts
- Version

---

### Step 4

Install Express

```bash
npm install express
```

Creates

```
node_modules
```

and installs Express package.

---

### Step 5

Install Nodemon

```bash
npm install --save-dev nodemon
```

Nodemon automatically restarts the server whenever we save the file.

Without Nodemon

```
Save

↓

Stop Server

↓

Run Again
```

With Nodemon

```
Save

↓

Automatic Restart
```

---

### Step 6

Add Script

package.json

```json
"scripts":{
    "start:api":"nodemon server.js"
}
```

Now we can simply write

```bash
npm run start:api
```

instead of

```bash
nodemon server.js
```

---

## 📁 Folder Structure

```
Express

│

├── configurations

├── controllers

├── middlewares

├── models

├── routes

├── services

├── utils

├── package.json

├── package-lock.json

├── server.js

└── .env
```

---

## 💼 Freelancing Importance

★★★★★

Every backend project begins with this setup.

---

## ⭐ Must Remember

✔ package.json stores project information.

✔ node_modules stores installed packages.

✔ npm install installs packages.

✔ Nodemon restarts server automatically.