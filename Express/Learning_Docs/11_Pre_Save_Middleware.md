# Topic 11 – Mongoose pre("save") Middleware

## Status

✅ Completed

---

# Objective

In this class we learned:

- What is Middleware in Mongoose?
- What is pre("save")?
- When does it execute?
- Why do we use it?
- How it works before saving data.

---

# What Changed From Previous Topic

Previous Topic

Schema Validation

↓

Current Topic

Mongoose Middleware

↓

Data can be modified before saving into MongoDB.

---

# File Updated

models/user.model.js

---

# Complete Code

```javascript
userSchema.pre("save", function(next){

    console.log("Data is getting saved!!!!!");

    next();

});
```

---

# What is pre("save")?

pre means

Run BEFORE.

save means

Before saving a document into MongoDB.

Whenever

```javascript
User.create()

new User().save()
```

runs,

this middleware executes automatically.

---

# Why use pre("save")?

Sometimes we want to modify data before storing.

Examples

Password Hashing

Trim Spaces

Convert Data

Generate Slug

Generate Token

Logging

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

MongoDB

↓

Response

---

# Line by Line Explanation

---

## Line 1

```javascript
userSchema.pre(
```

Registers Middleware.

Whenever save happens,

this function executes automatically.

---

## "save"

```javascript
"userSchema.pre("save")"
```

Means

Execute before save operation.

---

## function(next)

```javascript
function(next)
```

This function is called automatically.

next()

tells Mongoose

Continue execution.

---

## console.log()

```javascript
console.log("Data is getting saved!!!!!");
```

Only for testing.

Whenever save happens,

Terminal prints

```text
Data is getting saved!!!!!
```

---

## next()

```javascript
next();
```

Very Important.

Without next()

Request stops here.

MongoDB never saves data.

---

# Real Life Example

Imagine Airport Security.

Passenger

↓

Security Check

↓

Allowed

↓

Flight

Passenger

=

User Data

Security

=

pre("save")

Flight

=

MongoDB

---

# Common Mistakes

Forgot next()

↓

Request hangs forever.

---

Wrong Middleware Name

```javascript
pre("saving")
```

Wrong

Correct

```javascript
pre("save")
```

---

Middleware added after Model

Wrong

```javascript
const User = mongoose.model(...)

userSchema.pre(...)
```

Always

Middleware first

↓

Model second

---

Correct Order

Schema

↓

Middleware

↓

Model

↓

Export

---

# Postman Test

Whenever

POST

/createUser

is called

Terminal shows

```text
Data is getting saved!!!!!
```

Then

MongoDB stores data.

---

# Why Mentor Added This?

At this moment

Middleware only prints a message.

Next class

The same middleware

will hash password.

Instead of

```text
123456
```

MongoDB will store

```text
$2b$10$.............
```

---

# Interview Questions

What is Middleware?

Difference between Express Middleware and Mongoose Middleware?

When does pre("save") execute?

Why is next() necessary?

Can we modify document inside pre("save")?

Answer

Yes.

---

# Freelancing Notes

Most projects use

pre("save")

for

Password Hashing

Timestamp

Slug

Default Values

Image Processing

Never write hashing logic inside Controller.

Always inside Model Middleware.

---

# Revision Questions

1

What is pre("save")?

2

When does it execute?

3

What happens if next() is removed?

4

Can pre("save") modify data?

5

Why is password hashing written here?

---

# Next Topic

bcrypt

Password Hashing

Hash vs Plain Password
