# Topic 09 – Mongoose Schema & Model

## 📌 Topic Status

✅ Completed

---

# 🎯 Objective

In this class we learned how to create the structure of our database using Mongoose.

By the end of this topic you should understand:

- Why Schema is needed.
- What Model is.
- Difference between Schema and Model.
- How User.create() works.
- Which file contains what code.
- How the request reaches MongoDB.

---

# 📂 Files Created / Updated

## 1. models/user.model.js

Purpose

Stores database structure (Schema) and Model.

---

## 2. controllers/user.controller.js

Purpose

Uses User Model to insert data.

---

## 3. routes/user.router.js

Purpose

Connects API endpoint with controller.

---

## 4. server1.js

Purpose

Registers router.

No schema logic is written here.

---

# 📌 Flow

Postman

↓

server1.js

↓

user.router.js

↓

user.controller.js

↓

user.model.js

↓

MongoDB

↓

Response

---

# 📄 Complete Code

## File

models/user.model.js

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String
    },

    age:{
        type:Number
    },

    password:{
        type:String
    },

    email:{
        type:String
    },

    phoneNumber:{
        type:Number
    }

});

const User = mongoose.model(
    "User",
    userSchema
);

module.exports={
    User
};
```

---

# 🔍 Line by Line Explanation

## Line 1

```javascript
const mongoose = require("mongoose");
```

Purpose

Imports Mongoose package.

Without this line

Schema cannot be created.

---

## Line 3

```javascript
const userSchema = new mongoose.Schema({
```

Creates a Schema.

Think of it as a blueprint for one User document.

---

## name

```javascript
name:{
    type:String
}
```

Meaning

Only String values are accepted.

Correct

```text
"Manoj"
```

Wrong

```text
123
```

---

## age

```javascript
age:{
    type:Number
}
```

Stores numeric age.

Example

25

---

## password

Stores user password.

(Currently plain text.)

Later we will hash it using bcrypt.

---

## email

Stores email address.

Validation will be added in the next topic.

---

## phoneNumber

Stores user's phone number.

Validation will also be added later.

---

## Creating Model

```javascript
const User = mongoose.model(
    "User",
    userSchema
);
```

Schema only defines rules.

Model performs operations like

- create()
- find()
- updateOne()
- deleteOne()

---

## Export

```javascript
module.exports={
    User
};
```

Allows other files to use the User Model.

Example

```javascript
const { User } = require("../models/user.model");
```

---

# 📄 Controller Code

## File

controllers/user.controller.js

```javascript
const { User } = require("../models/user.model");

function createUser(request,response){

    User.create(request.body)

    .then((user)=>{

        response.json({

            message:"User Created Successfully",

            data:user

        });

    })

    .catch((err)=>{

        response.json({

            message:"Error",

            error:err.message

        });

    });

}

module.exports={
    createUser
};
```

---

# 🔍 Controller Explanation

User.create()

↓

Sends data to MongoDB.

request.body

↓

Contains JSON received from Postman.

---

# 📄 Router Code

## File

routes/user.router.js

```javascript
userRouter.post(
    "/createUser",
    createUser
);
```

Purpose

When Postman calls

POST

/createUser

↓

Controller executes.

---

# 🧠 Real Life Analogy

Schema

↓

Admission Form

Model

↓

School Clerk

MongoDB

↓

School Record Room

Controller

↓

Teacher collecting forms

---

# ⚠ Common Errors

❌ mongoose is not defined

Reason

Forgot

```javascript
const mongoose = require("mongoose");
```

---

❌ User.create is not a function

Reason

Wrong export/import.

---

❌ Cannot find module

Reason

Wrong file path.

---

# 🧪 Postman

POST

http://localhost:5001/api/v1/users/createUser

Body

```json
{
    "name":"Manoj",
    "age":25,
    "password":"123456",
    "email":"manoj@gmail.com",
    "phoneNumber":9876543210
}
```

---

# ⭐ Freelancing Importance

★★★★★

Every MERN project has Models.

Without Models

Authentication

Products

Orders

Payments

cannot be developed.

---

# 📝 Revision Questions

1. What is Schema?
2. What is Model?
3. Difference between Schema and Model?
4. Why is User.create() written inside Controller?
5. Why do we export User?
6. Which file contains Schema?
7. Which file communicates with MongoDB?

---

# 📌 Next Topic

Schema Validation

- required
- unique
- lowercase
- match
- Custom Messages

After that

Password Hashing (bcrypt)


server.js

---

# Request Flow

Client

↓

Postman

↓

Route

↓

Controller

↓

User Model

↓

MongoDB

↓

Response

---

# Common Mistakes

1.

Forgetting

require("mongoose")

Error

mongoose is not defined

---

2.

Wrong Export

module.export

instead of

module.exports

---

3.

Wrong Import

const User=require(...)

Wrong path

↓

Cannot find module

---

4.

Using Schema directly

Wrong

userSchema.create()

Correct

User.create()

---

5.

Wrong Model Name

Using

mongoose.model("users")

Instead use

mongoose.model("User")

MongoDB automatically creates

users

collection.

---

# Commands Learned

No new command.

Only learned

Schema

Model

Export

Import

---

# Important Files

models/

↓

user.model.js

This file only defines

Schema

and

Model.

No API logic is written here.

---

# Mentor Code Flow

Create Schema

↓

Add Fields

↓

Create Model

↓

Export Model

↓

Import into Controller

↓

Use User.create()

---

# Practice

Create another schema

Product

Fields

name

price

category

quantity

Do not connect it anywhere.

Just practice writing the schema.

---

# Revision Questions

1.

What is Schema?

2.

Why do we need Schema?

3.

Difference between Schema and Model?

4.

Why do we use mongoose.model()?

5.

Who talks to MongoDB?

6.

Why do we export User?

7.

Which folder contains Schema?

---

# Freelancing Importance

⭐⭐⭐⭐⭐

Every MERN project has Models.

Authentication

Products

Orders

Payments

Students

Teachers

Employees

Everything starts from a Model.

---

# Quick Revision

Schema

↓

Blueprint

Model

↓

Database Operations

Controller

↓

Uses Model

Model

↓

Uses Schema

MongoDB

↓

Stores Documents

---

# What comes next?

Next class

Topic 10

Schema Validation

required

unique

lowercase

match

minLength

maxLength