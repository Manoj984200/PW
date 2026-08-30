# Topic 08 - MongoDB & Mongoose Connection

---

# What we learned

In this class we connected our Express application with MongoDB Atlas using Mongoose.

Until now our APIs were only returning data from JavaScript.

Now we are storing data permanently inside a database.

---

# Why do we need a Database?

Without a database,

If server restarts,

all data is lost.

Example

User registers.

↓

Data stored in variable.

↓

Server restarts.

↓

Data disappears.

A database permanently stores data.

---

# Why MongoDB?

MongoDB is a NoSQL Database.

Instead of Tables,
MongoDB stores

Documents

inside

Collections.

Example

School Database

Collection

Users

↓

Document 1

{
    name:"Manoj",
    age:25
}

↓

Document 2

{
    name:"Rahul",
    age:30
}

---

# Why Mongoose?

NodeJS cannot directly communicate with MongoDB comfortably.

Mongoose acts as a bridge.

Express

↓

Mongoose

↓

MongoDB

Mongoose provides

• Schema

• Validation

• Models

• Query methods

• Middleware

---

# Packages Installed

npm install mongoose

---

# MongoDB Atlas

We created

MongoDB Atlas Account

↓

Project

↓

Cluster

↓

Database User

↓

Password

↓

Connection URL

---

# Connection URL

Example

mongodb+srv://username:password@cluster.mongodb.net/databaseName

Never hardcode this URL.

Store it inside

.env

Example

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/express_db

---

# Folder Structure

Express

configurations

db.config.js

models

routes

controllers

server1.js

.env

---

# db.config.js

Purpose

Only responsible for connecting MongoDB.

Example

const mongoose = require("mongoose");

async function dbConfig(){

    try{

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected Successfully");

    }

    catch(err){

        console.log(err);

    }

}

module.exports={
    dbConfig
};

---

# server1.js

Import

dbConfig

Inside app.listen()

await dbConfig();

Example

app.listen(port, async ()=>{

    await dbConfig();

    console.log("Listening...");

})

---

# Why connect inside app.listen() ?

Server starts

↓

Database connects

↓

Ready to accept requests

---

# Flow Diagram

Application Starts

↓

dotenv loads .env

↓

Express App Created

↓

Server Starts

↓

MongoDB Connects

↓

Ready for APIs

---

# Important Files

.env

Stores secret values.

Example

PORT

MONGO_URI

Never upload .env to GitHub.

---

# Common Errors

1.

Error

querySrv EBADNAME

Reason

Wrong MongoDB URL.

---

2.

Operation users.insertOne buffering timed out

Reason

Database not connected.

---

3.

MongoDB Connected Successfully not printed

Reason

dbConfig() not called.

---

4.

Cannot connect

Reason

Wrong username

Wrong password

Wrong database name

Wrong cluster URL

IP not allowed

---

# How to Verify Connection

Run

npm run start:api

Output should be

Server is running...

MongoDB Connected Successfully

If these appear,

Connection is successful.

---

# Real Project Flow

Client

↓

Postman

↓

Express Server

↓

Controller

↓

Model

↓

MongoDB

↓

Response

---

# Commands Learned

npm install mongoose

npm run start:api

---

# Revision Questions

1.

Why do we use MongoDB?

2.

Why do we need Mongoose?

3.

What is db.config.js?

4.

Why is MONGO_URI stored in .env?

5.

Why should .env never be uploaded to GitHub?

6.

What is the purpose of mongoose.connect()?

7.

Why do we call dbConfig() before using database APIs?

---

# Is this important for MERN Freelancing?

★★★★★ (Very Important)

Every MERN project uses MongoDB.

You cannot build authentication, users, products, orders, carts or payments without database connectivity.

---

# Summary

Today we learned

✓ MongoDB Atlas

✓ Cluster

✓ Database Connection

✓ Mongoose

✓ mongoose.connect()

✓ db.config.js

✓ .env

✓ MONGO_URI

✓ Server Connection Flow

This topic is the foundation for everything that comes next.
