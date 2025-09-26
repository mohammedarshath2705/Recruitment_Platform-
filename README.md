# Recruitment Platform Prototype

## Project Overview
This project is a minimal recruitment platform with an API for user registration and login using JWT authentication, and a basic user profile React page.

---

## Features
- **User Registration API**: Sign up with email & password
- **Login API**: Authenticate and receive a JWT token
- **React Profile Page**: Fetch and display user profile details
- **Database Schema**: Simple structure for users and profiles
- **API Docs**: Describes endpoints, authentication, and error responses

---

## Tech Stack
- **Backend**: Node.js, Express.js, Mongoose (MongoDB)
- **Frontend**: React + Vite, Tailwind CSS, React Router
- **Auth**: JWT (jsonwebtoken), bcrypt for password hashing
- **Validation & Parsing**: express-validator, body-parser
- **Dev Tools**: dotenv, nodemon
  
---

## Setup Instructions


### Clone Repository
```bash
git clone https://github.com/mohammedarshath2705/Recruitment_Platform-.git 
cd Recruitment_Platform-
```

### Backend Setup
```bash
cd backend
npm install
```

### Create a .env file in backend/:
```bash
PORT=5000
MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your JWT Secret Key>
JWT_EXPIRES_IN=<Expiration Time>
```


### Start the backend server:
```bash
npm run dev
```
#### Backend runs at http://localhost:5000

### Frontend Setup
```bash
cd Frontend
npm install
```

### Create a .env file in frontend/:
```bash
VITE_API_URL=http://localhost:5000
```

### Start the Frontend server:
```bash
npm run dev
```
#### Frontend runs at http://localhost:5173 (default Vite port)
