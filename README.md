# 📌 MERN CRUD Task — Assessment README

This project is a MERN (MongoDB, Express.js, React.js, Node.js) based application built as part of an assessment. It includes user authentication, protected routes, API integration, and a responsive frontend.

---

## 📂 Project Structure

```
root
 ┣ backend (Express Server)
 ┣ frontend (React Client)
 ┣ README.md
 ┗ package.json
```

---

## 🔧 Tech Stack

| Layer          | Technology                        |
| -------------- | --------------------------------- |
| Frontend       | React.js, Axios, React Router DOM |
| Backend        | Node.js, Express.js               |
| Database       | MongoDB / Mongoose                |
| Authentication | JWT + bcrypt.js                   |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

git clone "https://github.com/Khushi-Aggarwal-9456/TrologyAssesment-KhushiAggarwal"

### 2️⃣ Install Dependencies

npm install
cd frontend && npm install

### 3️⃣ Create Environment File

Create `.env` file in backend directory:

MONGO_URI="mongodb+srv://machinelearning0770:gk_MONGODB_9555@cryptodiary.64j6drl.mongodb.net/iNoteBook"

## ▶️ Run the Project

### Start Backend

cd backend
npm install 
npm i nodemon bcryptjs cors express-validator mongodb mongoose jsonwebtoken 
nodemon index.js

### Start Frontend

cd frontend
npm install
npm run dev

---

## 🔗 API Endpoints (Express Server)

👉 *Add your API documentation here*

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| POST   | `/mern/auth/createuser` | User Registration      |
| POST   | `/mern/auth/login`  | User Login             |
| POST    | `/api/getallusers`  | Get Authenticated User |

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| GET   | `/mern/items/fetchAllItems/:limit` | To fetch all user notes  |
| POST   | `/mern/items/addItem`  |To add a new note         |
| PUT   | `/mern/items/updateItem/:id`  |To Upadte a note         |
| DELETE   | `/mern/items/deleteItem/:id`  |To delete a note         |


## 🧪 Testing

Use tools like **Postman** to test backend routes.

---

## 🚧 Future Improvements

* 🔹 Add validation UI messages
* 🔹 Integrate refresh tokens
* 🔹 Add admin role and dashboard

---

## 🧑‍💻 Author

Name: Khushi Aggarwal
Git user name: Khushi-Aggarwal-9456
