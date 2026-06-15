# Backend made with Drizzle and TypeScript

## Important commands (make sure they're ran inside `/backend` or its subfolders!)

### To be ran upon cloning repo

```bash
npm install
```

### To be ran **every time** a database schema changes, these will create new SQL files and update tables of linked database

```bash
npm run generate
npm run migrate
```

### Compile backend to JavaScript (creates/overwrites output folder `/dist`)

```bash
npm run build
```

### Spin up backend in production (run above command first)

```bash
npm run start
```

### Run in developer environment (backend will rerun on file changes)

```bash
npm run dev
```

## Environment variables

### The backend **expects an environment variable** representing the full link to a PostgreSQL database, e.g.:

```env
DATABASE_URL=postgresql://<username>:@<database url>:<port>/<database name>

EMAIL_USER: "from gmail/yahoo/outlook"
EMAIL_PASS: ""
```

# API Guide

## Logging in
```js
POST login/
```

### Input values
```js
{
  email: string, 
  password: string
}
```

### Return values
#### On login success:
```js
// HTTP 200 OK
{
  message: "Logged in successfully",
  user: {...}
}
```
#### On user not found:
```js
// HTTP 400 Bad Request
{
  message: "User not found"
}
```
#### On failure to create user session:
```js
// HTTP 500 Internal Server Error
{
  error: error
}
```
#### On failure of verification email delivery:
```js
// HTTP 500 Internal Server Error
{
  error: "An error occurred while sending the login success email."
}
```

## Registering a new account
```js
POST register/
```
### Input values
```js
{
  name: string,
  email: string,
  password: string,
  dob: string,
  address: string
}
```
### Return values 
#### On success:
```js
// HTTP 201 Created
{
  newUser: {...},
  message: "User registered successfully."
}
```

#### On user already existing:
```js
// HTTP 400 Bad Request
{
  error: "User already exists."
}
```

#### On error creating account:
```js
// HTTP 500 Internal Server Error
{
  error: "An error occurred while creating the account."
}
```

## Changing password on existing account
```js
POST register/change-password
```

### Input values
```js
{
  email: string,
  oldPassword: string,
  newPassword: string
}
```

### Return values

#### On success:
```js
// HTTP 200 OK
{
  message: "Password changed successfully."
}
```

#### On any of the three input values missing:
```js
// HTTP 400 Bad Request
{
  error: "Email, old password, and new password are required."
}
```

#### On user not found:
```js
// HTTP 404 Not Found
{
  error: "User not found"
}
```

#### On incorrect old password:
```js
// HTTP 400 Bad Request
{
  error: "Old password is incorrect"
}
```

#### On error changing password:
```js
// HTTP 500 Internal Server Error
{
  error: "An error occurred while changing the password."
}
```

## Forgot password
```js
POST register/forgot-password
```

### Input values
```js
{
  email: string
}
```

### Return values

#### On success:
```js
// HTTP 200 OK
{
  message: "Temporary password sent to email."
}
```

#### On missing input value:
```js
// HTTP 400 Bad Request
{
  error: "Email is required."
}
```

#### On user not found:
```js
// HTTP 404 Not Found
{
  error: "User not found."
}
```

#### On error while creating temp. password:
```js
// HTTP 500 Internal Server Error
{
  error: "An error occurred while processing this request."
}
```
