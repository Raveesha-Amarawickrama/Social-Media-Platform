**🧑‍🤝‍🧑 MERN Social Media App**
A full-stack social media application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can register, log in, create posts, like posts, add friends, and view profiles.

**📦 Tech Stack**
Frontend: React, React Router, Axios

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

Authentication: bcrypt, JWT

**🛠️ Features**
User Registration and Login

JWT-based Authentication

Create, Like, and View Posts

View Other Users and Add/Remove Friends

User Profiles with Friends List

Secure password hashing

**📁 Folder Structure**

root/
├── client/              # React frontend
├── server/              # Node.js/Express backend
└── README.md

**🚀 Getting Started**
**📌 Prerequisites**
Node.js & npm

MongoDB (local or Atlas)

**⚙️ Backend Setup**

cd server
npm install

**📄 Create .env**

PORT=3000
MONGO_URL=mongodb://localhost:27017/socialmedia
JWT_SECRET=your_jwt_secret

**▶️ Run Server**

npm start


**🌐 Frontend Setup**

cd client
npm install
npm start
App will run at http://localhost:5173 (Vite default) or http://localhost:3000 (CRA).

**API Routes**
Auth
Method	Route	Description
POST	/auth/register	Register a new user
POST	/auth/login	Login a user

Users
Method	Route	Description
GET	/users/:id	Get user by ID
GET	/users/:id/friends	Get user's friends
PATCH	/users/:id/:friendId	Add or remove a friend

Posts
Method	Route	Description
POST	/posts	Create a post
GET	/posts	Get all feed posts
GET	/posts/:userId/posts	Get posts by user
PATCH	/posts/:id/like	Like/unlike a post





