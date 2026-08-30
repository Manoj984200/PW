# Topic 13 – Password Verification using bcrypt.compare()

## Status

✅ Completed

---

# Objective

In this class we learned:

- Why we cannot compare hashed passwords directly.
- What bcrypt.compare() does.
- Login authentication flow.
- How entered password is verified.
- Difference between hash() and compare().

---

# Revision from Previous Topic

During Signup

User enters

```text
123456
```

Database stores

```text
$2b$10$gXskD7.....
```

Question

During Login

User again enters

```text
123456
```

How can MongoDB compare

```text
123456
```

with

```text
$2b$10$gXskD7.....
```

Answer

bcrypt.compare()

---

# Why == Cannot Be Used

Wrong

```javascript
if(password == user.password)
```

Example

```text
password

123456

user.password

$2b$10$abchsdj.....
```

Obviously

These are different strings.

Result

False

---

# Solution

bcrypt.compare()

Internally hashes entered password

↓

Compares with stored hash

↓

Returns

true

or

false

---

# Syntax

```javascript
const isMatched = await bcrypt.compare(
    enteredPassword,
    user.password
);
```

---

# Line by Line Explanation

---

## bcrypt.compare()

```javascript
bcrypt.compare()
```

Checks whether

Entered Password

matches

Stored Hashed Password.

---

## enteredPassword

```javascript
enteredPassword
```

Password entered by user during Login.

Example

```text
123456
```

---

## user.password

```javascript
user.password
```

Password stored inside MongoDB.

Example

```text
$2b$10$DgJshd8......
```

---

## await

bcrypt.compare()

takes time.

Therefore

```javascript
await
```

is necessary.

---

## Result

```javascript
const isMatched =
await bcrypt.compare(...)
```

Possible values

```javascript
true
```

or

```javascript
false
```

---

# Login Flow

Frontend

↓

POST /login

↓

Controller

↓

Find User by Email

↓

bcrypt.compare()

↓

Password Correct?

↓

YES

↓

Generate JWT

↓

Login Success

OR

↓

NO

↓

Invalid Password

---

# Example

Database

```text
Password

$2b$10$Ahd72k.....
```

User enters

```text
123456
```

bcrypt.compare()

↓

true

Login Successful

---

Wrong Password

User enters

```text
abcdef
```

bcrypt.compare()

↓

false

Return

```json
{
   "message":"Invalid Password"
}
```

---

# Difference

bcrypt.hash()

Used During

Signup

Purpose

Convert Plain Password

↓

Hash

---

bcrypt.compare()

Used During

Login

Purpose

Verify Password

---

# Important Rule

Never compare passwords manually.

Wrong

```javascript
password == user.password
```

Correct

```javascript
await bcrypt.compare(
password,
user.password
)
```

---

# Common Mistakes

Forgot await

↓

compare returns Promise

Wrong

Comparing hash using ==

Wrong

Hashing password again before compare

Wrong

---

# Real Life Example

Imagine

Bank Locker

Original Key

↓

Machine checks

↓

Locker Opens

Machine does not compare shape manually.

bcrypt.compare()

works similarly.

---

# Interview Questions

Why can't hashed password be compared using == ?

What does bcrypt.compare() return?

Difference between hash() and compare()?

Which API uses compare()?

Signup or Login?

Answer

Login

---

# Freelancing Notes

Every authentication system

uses

bcrypt.compare()

during Login.

Never expose hashed password to frontend.

Always compare on backend.

---

# Revision Questions

1

Why can't == be used?

2

What does compare() return?

3

Why await is required?

4

Which API uses compare()?

5

Difference between hash() and compare()?

---

# Next Topic

JWT

Introduction

Authentication

Authorization

Token Based Login
