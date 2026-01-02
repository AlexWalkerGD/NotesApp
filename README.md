## 📝 NotesApp

A Full Stack notes application with real authentication, where each user can access and manage only their own notes.
This project was built with a strong focus on best practices, clean architecture, security, and user experience.

<img width="958" height="480" alt="Captura de tela 2026-01-02 182819" src="https://github.com/user-attachments/assets/05599c2a-3def-4759-92de-7a82521cf023" />
<img width="957" height="478" alt="Captura de tela 2026-01-02 183259" src="https://github.com/user-attachments/assets/7a0bb5c4-720a-4c03-9345-4a1bee405208" />

---

## 🚀 Live Demo

🔗 Frontend (Deploy): https://notes-app-psi-ten.vercel.app

🔗 Backend (API): https://railway.com/project/e7ceb36d-bad5-42a2-8a7d-c257e10c9b65?environmentId=f492f402-0961-4a21-b31b-7bee8a655a20

---

## 🛠️ Tech Stack

### Frontend

- React + Vite

- React Router DOM

- Tailwind CSS

- Axios

- React Hot Toast

- LocalStorage (JWT)

### Backend

- Node.js

- Express

- MongoDB

- Mongoose

- JWT (JSON Web Token)

- Bcrypt

- Layered Architecture (MVC)

### Deployment

- Frontend: Vercel / GitHub Pages

- Backend: Railway

- Database: MongoDB Atlas

---

 ## ✨ Features
### 🔐 Authentication

- User registration

- Login with JWT

- Protected routes

- Logout (planned)

### 📝 Notes

- Create notes

- List notes for the authenticated user

- Edit notes

- Delete notes

- Notes are linked to a single user

### 🎨 UI / UX

- Modern layout

- Responsive grid-based cards

- Visual feedback with toast notifications

- Clean and intuitive user experience

  ---

 ## 🔒 Security

- JWT-based authentication

- Authorization middleware on the backend

- Token stored in localStorage

- Protected routes on the frontend

- Users can only access their own notes

  ---

 ## ⚙️ Environment Variables
### Frontend (Vite)
- VITE_API_URL=https://your-railway-api-url.com
- VITE_BASENAME=/NotesApp

### Backend
- PORT=3000
- MONGO_URI=your_mongodb_uri
- JWT_SECRET=your_secret_key

 ---

## 🧪 Running the Project Locally

1. Clone the repository

```bash
git clone https://github.com/AlexWalkerGD/NotesApp.git
```

2. Frontend
```bash
    cd frontend
    npm install
    npm run dev
```

3. Backend
```bash
    cd backend
    npm install
    npm run dev
```

 ---

## 👨‍💻 Author

Developed by **Alex Walker**

💼 [GitHub](https://github.com/AlexWalkerGD)  
📧 alexwalkerson@hotmail.com

 ---

## ⭐ Final Notes

This project was built as a real-world practice application, simulating a production-ready notes system with authentication and user-based authorization.
It is part of my personal portfolio and ongoing growth as a developer.

If you like this project, feel free to leave a ⭐ on the repository!
