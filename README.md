# Face Recognition Backend API

This is the backend service for the Face Recognition App (MVP). It handles face recognition processing, API communication, and database management.

---

## 🚀 Features

- Face recognition processing (image upload & matching)
- REST API for mobile frontend (React Native - Expo)
- User data storage and retrieval
- Cloud deployment on AWS EC2
- Containerized using Docker

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- AWS EC2
- Docker

---

## 📂 Project Structure


controllers/
models/
routes/
server.js
Dockerfile
package.json


---

## ⚙️ Installation & Setup

### 1. Clone the repository

git clone https://github.com/anshsinghbca/backend.git

cd backend


### 2. Install dependencies

npm install


### 3. Create .env file

PORT=5000
MONGO_URI=your_mongodb_connection_string


### 4. Run the server

npm start


---

## 🐳 Run with Docker

### Build Docker image

docker build -t face-backend .


### Run container

docker run -p 5000:5000 face-backend


---

## 🌐 API Endpoints
http://51.20.10.157:5000/api/activity

---

## ☁️ Deployment

Backend is deployed on AWS EC2 and accessible via public IP.



## 🗄️ Database

- MongoDB Atlas is used for storing user data and face information
- Secure and scalable cloud database


## 👨‍💻 Author

Ansh Singh


## 📌 Notes

- This is an MVP (Minimum Viable Product)
- Future improvements: authentication, performance optimization, UI integration
