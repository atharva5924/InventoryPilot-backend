# 📦 Inventory Management Tool – Backend

This is the Node.js + Express.js backend for the **Inventory Management Tool** — a full-stack application that allows users to manage inventory with authentication, product operations, and interactive dashboards.

---

### 🚀 Live Demo

🔗 [Deployed Live on Vercel](https://inventory-pilot-frontend.vercel.app/)

---

### ⚙️ Hosted Backend

The Express.js + MongoDB backend is deployed on Render:

📡 API Base: [`https://pinpointmap-backend.onrender.com`](https://inventorypilot-backend-ib2e.onrender.com)<br/>
📂 [Frontend GitHub Repository](https://github.com/atharva5924/InventoryPilot-frontend)<br/>
Used by the frontend to perform CRUD operations for inventory items.

---

## 🚀 Features

- 🧑‍💼 User registration and login (JWT + Cookies)
- 🔐 Protected routes using middleware
- 🧾 Full product CRUD (Create, Read, Update, Delete)
- 📊 Bar chart & pie chart support via endpoints
- ☁️ Image uploads via Cloudinary
- ⚙️ Clean, scalable REST API

---

## 📂 API Endpoints

### 🧑 Auth Routes

| Method | Endpoint    | Description         |
|--------|-------------|---------------------|
| POST   | /register   | Register new user   |
| POST   | /login      | Login existing user |
| GET    | /logout     | Logout current user |

### 📦 Product Routes

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| GET    | /products        | Get all products    |
| POST   | /products        | Add new product     |
| PUT    | /products/:id    | Edit product        |
| DELETE | /products/:id    | Delete product      |

> **Note:** All product routes require authentication via cookies.

---

## ⚙️ Tech Stack

- **Node.js** – Server runtime
- **Express.js** – API framework
- **MongoDB + Mongoose** – Database
- **JWT & Cookies** – Authentication
- **Cloudinary** – Image hosting
- **Dotenv** – Environment configuration
- **CORS** – Frontend-backend integration

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/atharva5924/InventoryPilot-backend.git
cd PinPointMap-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables
Create a .env file with the following:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Start the server

```bash
npm start
```

Server will run at:
🌐 http://localhost:5000

---

## 🌍 Deployment Notes

When deploying to **Render**, **Railway**, or **Vercel**:

- ✅ Ensure all required environment variables are set
- ✅ Enable **CORS** with the correct frontend origin
- ✅ Cloudinary keys must be secure in env

---

## 📁 Project Structure

```bash
inventory-backend/
├── controllers/       # Auth & product logic
├── middlewares/       # JWT verification
├── models/            # Mongoose schemas
├── routes/            # Auth and product routes
├── utils/             # Error handlers, helpers
├── .env               # Config variables
├── index.js           # Entry point
├── package.json       # Scripts & metadata
└── README.md          # This file
```

---

### 👨‍💻 Developer

**Atharva Nile**
CSE Undergrad @ IIIT Nagpur
📧 atharvanile2005@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/atharva-nile-a50120294) • [GitHub](https://github.com/atharva5924)

---


Let me know if you'd like:

- Shields/badges for GitHub (like `build`, `license`, `deploy`, etc.)
- Postman collection export instructions or API test guide

---
