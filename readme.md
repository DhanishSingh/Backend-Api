# Task CRUD API

A beginner-friendly REST API built using Express.js, Node.js, and MongoDB.

This project demonstrates full CRUD operations:

* Create Task
* Read All Tasks
* Read Single Task
* Update Task
* Delete Task

---

# Features

* RESTful API architecture
* MongoDB database connection
* Express routing
* MVC folder structure
* CRUD operations
* Postman tested
* ES Modules support

---

# Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

---

# Project Structure

```txt id="rtrz13"
Backend-Api/
│
├── src/
│   ├── config/
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── db/
│   │   └── db.js
│   │
│   ├── model/
│   │   └── task.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   └── app.js
│
├── server.js
├── package.json
└── README.md
```

---

# Installation

## Clone Repository

```bash id="d04u1n"
git clone <your-repository-url>
```

## Move Into Project Folder

```bash id="dnjlwm"
cd Backend-Api
```

## Install Dependencies

```bash id="j9l1ps"
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

Example:

```env id="mhxyhn"
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

---

# Run Server

## Development Mode

```bash id="ivnzm1"
npm run dev
```

## Production Mode

```bash id="bvr1kk"
node server.js
```

---

# API Endpoints

## Create Task

```http id="s6crj8"
POST /api/tasks
```

### Body

```json id="gh0uhm"
{
  "title": "Learn Backend",
  "description": "Build CRUD API"
}
```

---

## Get All Tasks

```http id="6cmrbx"
GET /api/tasks
```

---

## Get Single Task

```http id="kqf01z"
GET /api/tasks/:id
```

---

## Update Task

```http id="dd8shk"
PUT /api/tasks/:id
```

### Body

```json id="i0rl2t"
{
  "title": "Master Backend",
  "description": "CRUD Completed"
}
```

---

## Delete Task

```http id="zjlwm2"
DELETE /api/tasks/:id
```

---

# Sample Response

```json id="bhv2vz"
{
  "_id": "6a0812f611e30b3e463b259f",
  "title": "Learn Backend",
  "description": "Build CRUD API",
  "__v": 0
}
```

---

# Status Codes

| Code | Meaning      |
| ---- | ------------ |
| 200  | Success      |
| 201  | Created      |
| 404  | Not Found    |
| 500  | Server Error |

---

# Future Improvements

* Authentication with JWT
* User-specific tasks
* Validation middleware
* Error handling middleware
* Pagination
* Search & filtering

---

# Author

Made by Dhanish Singh 
