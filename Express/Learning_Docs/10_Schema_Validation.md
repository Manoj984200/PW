# Topic 10 – Mongoose Schema Validation

## Status

✅ Completed

---

# Objective

In this class we learned how to validate incoming data before storing it into MongoDB.

Validation makes sure only correct data is stored.

---

# What Changed From Previous Topic

Previous Topic

Schema only defined fields.

Example

name

age

email

phoneNumber

password

Now

Each field has rules.

MongoDB checks those rules automatically.

---

# Files Updated

models/user.model.js

Only this file changed.

---

# Validations Learned

required

unique

lowercase

match (Regex)

Custom Error Messages

---

# Complete Code

```javascript
name:{

    type:String,

    required:[true,"Name Field is required"]

},

age:{

    type:Number,

    required:[true,"Age field is required"]

},

password:{

    type:String,

    required:[true,"Password is required"]

},

email:{

    type:String,

    required:[true,"Email is required"],

    unique:true,

    lowercase:true,

    match:[
        /^\S+@\S+\.\S+$/,
        "Invalid Email Format"
    ]

},

phoneNumber:{

    type:Number,

    unique:true,

    required:[true,"Phone Number is required"],

    match:[
        /^[6-9]\d{9}$/,
        "Invalid Indian Mobile Number"
    ]

}
```

---

# Validation 1

required

```javascript
required:[true,"Name Field is required"]
```

Meaning

User must send this field.

Without it

MongoDB throws Validation Error.

---

Example

Correct

```json
{

"name":"Manoj"

}
```

Wrong

```json
{

}
```

Result

Validation Failed

---

# Validation 2

unique

```javascript
unique:true
```

Meaning

No duplicate value allowed.

Mostly used for

Email

Phone Number

Username

---

Example

Existing Email

```text
manoj@gmail.com
```

Trying Again

```text
manoj@gmail.com
```

MongoDB rejects it.

---

# Validation 3

lowercase

```javascript
lowercase:true
```

Automatically converts

```text
MANOJ@GMAIL.COM
```

into

```text
manoj@gmail.com
```

Why?

Email comparison becomes easier.

---

# Validation 4

match

```javascript
match:[
regex,
"Error Message"
]
```

Uses Regular Expression.

Checks format.

---

Email Regex

```javascript
/^\S+@\S+\.\S+$/
```

Meaning

Text

↓

@

↓

Text

↓

.

↓

Text

Accepted

abc@gmail.com

Rejected

abcgmail.com

Rejected

@gmail.com

Rejected

abc@

---

Phone Regex

```javascript
/^[6-9]\d{9}$/
```

Meaning

Starts with

6

7

8

9

Remaining

Exactly 9 digits

Total

10 digits

---

Accepted

9876543210

Rejected

1234567890

Rejected

5555555555

Rejected

98765

---

# Why Regex?

Without Regex

User may send

hello

abcd

123

@@@@@

MongoDB stores everything.

Regex prevents bad data.

---

# Validation Flow

Postman

↓

Controller

↓

Model

↓

Schema Validation

↓

If Valid

↓

MongoDB

↓

Success

Else

↓

Validation Error

---

# Common Errors

Validation failed

Reason

Required field missing.

---

Duplicate Key Error

Reason

unique failed.

---

Invalid Email Format

Reason

Regex failed.

---

Invalid Indian Mobile Number

Reason

Phone Regex failed.

---

# Postman Examples

Correct

```json
{

"name":"Manoj",

"age":25,

"password":"123456",

"email":"manoj@gmail.com",

"phoneNumber":9876543210

}
```

Wrong Email

```json
{

"email":"abcgmail.com"

}
```

Wrong Phone

```json
{

"phoneNumber":12345

}
```

Duplicate Email

```json
{

"email":"manoj@gmail.com"

}
```

---

# Interview Questions

Difference between required and unique?

Why use lowercase?

What is Regex?

Why validate data?

Can validation happen without Controller?

---

# Freelancing Notes

Every production project validates data.

Never trust user input.

Validation should always be done before saving.

---

# Revision Questions

1 Why required?

2 Why unique?

3 Why lowercase?

4 Why Regex?

5 Difference between Number and String?

6 Which fields usually use unique?

7 What happens if validation fails?

---

# Next Topic

pre("save")

Middleware

Password Hashing

bcrypt
