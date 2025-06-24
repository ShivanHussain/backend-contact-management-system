# Contact Management Backend API

This is a simple **Node.js + Express + MongoDB** backend project for managing contacts — created as part of an assignment. It supports creating, reading, updating, and deleting (CRUD) contact records.

---

##  Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **dotenv**
- **CORS**
- **Postman** (for testing)

---

## Project Structure

contact-management-backend/
│
├── config/
│ └── db.js # MongoDB connection setup
│
├── controllers/
│ └── contactController.js # All CRUD logic
│
├── middlewares/
│ ├── catchAsyncErrors.js # Async error wrapper
│ └── error.js # Centralized error handler
│
├── models/
│ └── Contact.js # Contact schema
│
├── routes/
│ └── contactRoutes.js # API routes
│
├── .env # Environment config
├── server.js # Entry point
├── package.json
└── README.md # You're here





---

## 🧑‍💻 Features

- 🔍 Get all contacts
- ➕ Create a contact
- ✏️ Update contact by ID
- 🗑️ Delete contact by ID
- 🧱 MongoDB schema with validation
- 🔐 Centralized error handling with JSON response
- ✅ Built using ES Modules

---

## ⚙️ Setup Instructions

### 1. Clone the Repo
    git clone <https://github.com/ShivanHussain/backend-contact-management-system>
    cd contact-management-backend

    
    
### 2. install dependencies
    npm install


### 3. set up .env file
    PORT=3000
    MONGO_URI=mongodb://127.0.0.1:27017/contact-db

### 4. start the server
    npm run dev


