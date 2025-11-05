# 💼 Job Application Portal – Node.js + MongoDB

A RESTful API built with **Node.js**, **Express**, and **MongoDB** that allows job candidates to register, log in, upload resumes, apply for job listings, and track their submitted applications.

---

## 🚀 Project Overview

This project demonstrates a secure and scalable backend application following RESTful design principles.  
It provides core functionality such as user authentication (JWT), file uploads (Multer), and CRUD operations for job applications.

---

## 🧰 Tech Stack

| Component | Technology |
|------------|-------------|
| Backend Framework | **Node.js + Express.js** |
| Database | **MongoDB (Mongoose ODM)** |
| Authentication | **JWT (JSON Web Token)** |
| File Uploads | **Multer** |
| Environment Management | **dotenv** |
| Deployment | **Render** |

---

## 🎯 Features

- 🔐 **User Authentication** (Register & Login using JWT)  
- 📄 **Resume Upload** using Multer  
- 💼 **Job Listings** (View & Apply)  
- 🧾 **Track Submitted Applications**  
- 🌱 **Seed Script** for sample job creation  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/job-application-portal.git
cd job-application-portal
```
###  2️⃣ Install Dependencies

```bash
npm install
```
###  3️⃣ Configure Environment Variables

```info
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
TOKEN_EXPIRES_IN=7d
UPLOAD_DIR=uploads
BASE_URL=http://localhost:4000

```
###  4️⃣ Seed Sample Jobs (optional)
```bash
npm run seed


```
###  5️⃣ Run the Server

```bash
npm start
```
The server will start at:
👉 http://localhost:4000

## 🧩 API Endpoints

### 👤 **Authentication Routes**

| Method | Endpoint | Auth | Description |
|---------|-----------|------|-------------|
| **POST** | `/api/auth/register` | ❌ | Register a new user account |
| **POST** | `/api/auth/login` | ❌ | Login and obtain a JWT token |

---

### 💼 **Job Routes**

| Method | Endpoint | Auth | Description |
|---------|-----------|------|-------------|
| **GET** | `/api/jobs` | ❌ | Retrieve all available job listings |
| **POST** | `/api/jobs` | ❌ *(or Admin)* | Create a new job (used for seeding/testing) |

---

### 📄 **Application Routes**

| Method | Endpoint | Auth | Description |
|---------|-----------|------|-------------|
| **POST** | `/api/applications/:jobId` | ✅ | Apply for a specific job (upload resume + cover letter) |
| **GET** | `/api/applications/my` | ✅ | Get all job applications submitted by the logged-in user |
| **GET** | `/api/applications/:id` | ✅ | Retrieve detailed information of a single application |

---

### ⚙️ **Utility Routes**

| Method | Endpoint | Auth | Description |
|---------|-----------|------|-------------|
| **GET** | `/` | ❌ | Health check – verifies API is running |

---
## 🧪 Sample Requests

### 👤 **Register a New User**
**Endpoint:** `POST /api/auth/register`  
**Content-Type:** `application/json`

```json
{
  "name": "Gulshan Singh",
  "email": "gulshan@example.com",
  "password": "StrongPassword123"
}

```
### 🔑 ** Login User**
**Endpoint:** `POST /api/auth/login`  
**Content-Type:** `application/json`

```json

  {
  "email": "gulshan@example.com",
  "password": "StrongPassword123"
}



```
### 💼 **Create Job (Admin/Seed)**
**Endpoint:** `POST /api/jobs`  
**Content-Type:** `application/json`

```json
{
 {
  "title": "Backend Developer",
  "company": "Tech Corp",
  "location": "Remote",
  "description": "Develop REST APIs using Node.js and Express"
}

}

```
### 
📄  **Apply for Job (Form-Data)**
**Endpoint:** `POST /api/applications/:jobId`  
Auth Required: ✅ Yes
**Content-Type:** `form-data`

| **Key** | **Type** | **Value** |
|----------|----------|-----------|
| `resume` | File | `resume.pdf` |
| `coverLetter` | Text | `I’m excited to apply for this position.` |

### 🔐 **Adding Authorization Header**

For all **protected routes**, you must include your **JWT token** in the request headers.  
You receive this token when you log in successfully.

#### 🧾 Header Example

| **Key** | **Value** |
|----------|-----------|
| `Authorization` | `Bearer <your_token>` |

---

## 🌐 Deployment

The backend API has been successfully deployed on **Render**.

### 🔗 Live API Endpoint
👉 [https://job-application-portal-mm47.onrender.com](https://job-application-portal-mm47.onrender.com)



