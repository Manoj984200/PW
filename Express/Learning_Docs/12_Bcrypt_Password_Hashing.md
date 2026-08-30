# Topic 12 – bcrypt Password Hashing

## Status

✅ Completed

---

# Objective

In this class we learned:

- Why passwords should never be stored in plain text.
- What bcrypt is.
- How bcrypt hashes passwords.
- Why hashing is done inside pre("save") middleware.
- Difference between Plain Password and Hashed Password.

---

# Why Plain Password is Dangerous

Suppose a user signs up with

```text
Password = 123456
```

If we directly save it into MongoDB,

Database stores

```text
123456
```

Anyone having database access can read it.

This is a serious security issue.

---

# Solution

Instead of storing

```text
123456
```

we convert it into

```text
$2b$10$LhW6M2..............
```

This process is called

Hashing.

---

# What is bcrypt?

bcrypt is an npm package used to hash passwords.

Installation

```bash
npm install bcrypt
```

Import

```javascript
const bcrypt = require("bcrypt");
```

---

# Where is bcrypt Used?

Inside

```javascript
user.model.js
```

because password hashing should happen automatically before saving the user.

Never hash password inside Controller.

---

# Flow

Postman

↓

Controller

↓

User.create()

↓

pre("save")

↓

bcrypt.hash()

↓

MongoDB

↓

Response

---

# Code Used

```javascript
const bcrypt = require("bcrypt");

userSchema.pre("save", async function () {

    this.password = await bcrypt.hash(this.password, 10);

});
```

---

# Line by Line Explanation

## Import bcrypt

```javascript
const bcrypt = require("bcrypt");
```

Imports bcrypt library.

Without this,

hash() cannot be used.

---

## pre("save")

```javascript
userSchema.pre("save")
```

Runs automatically before saving data.

---

## async function()

```javascript
async function ()
```

bcrypt.hash()

takes some time.

Therefore async is required.

---

## this.password

```javascript
this.password
```

this

means

Current User Object.

Suppose request is

```json
{
   "name":"Manoj",
   "password":"123456"
}
```

Then

```javascript
this.password
```

is

```text
123456
```

---

## bcrypt.hash()

```javascript
bcrypt.hash(this.password,10)
```

Converts

```text
123456
```

into

```text
$2b$10$Yskdh.....
```

---

## await

```javascript
await bcrypt.hash(...)
```

Waits until hashing completes.

Otherwise password may save before hashing.

---

## Salt Rounds

```javascript
10
```

is called

Salt Rounds.

Higher value

↓

More Secure

↓

More Time

Usually

```text
10
```

or

```text
12
```

is used.

---

# Before Hashing

MongoDB

```json
{
   "password":"123456"
}
```

---

# After Hashing

MongoDB

```json
{
   "password":"$2b$10$..........."
}
```

Password cannot be converted back.

---

# Difference

Plain Password

Readable

❌ Not Secure

Hashed Password

Unreadable

✅ Secure

---

# Why Use pre("save")?

Because every time

User.create()

or

save()

is called,

password automatically becomes hashed.

No developer can accidentally save plain password.

---

# Common Mistakes

Hashing inside Controller

❌ Wrong

Hash inside Model

✅ Correct

---

Forgetting await

Wrong

```javascript
bcrypt.hash(...)
```

Correct

```javascript
await bcrypt.hash(...)
```

---

Using hashSync()

Allowed

But async version is preferred.

---

# Interview Questions

What is bcrypt?

Why do we hash passwords?

What are Salt Rounds?

Why is hashing done inside pre("save")?

Can original password be retrieved from hash?

Answer

No.

Hashing is a one-way process.

---

# Freelancing Notes

Every authentication system uses bcrypt.

Never save password directly.

Always hash before storing.

Never send hashed password to frontend.

---

# Revision Questions

1. What is hashing?

2. Why is bcrypt used?

3. Why is async required?

4. What is Salt Round?

5. Why hash inside Model instead of Controller?

---

# Next Topic

Password Verification

bcrypt.compare()

Login API

JWT Authentication
