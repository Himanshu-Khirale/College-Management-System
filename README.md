# 🎓 College Management System (MERN)

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://college-management-system-vof5.vercel.app/)
[![Backend](https://img.shields.io/badge/API-Render-blue?style=for-the-badge)](https://college-management-system-iyxw.onrender.com/)

A comprehensive, production-ready College Management System built with the MERN stack. Features include role-based access control, academic material management, marks tracking, and dynamic timetable generation.

## 🚀 Live Links
- **Frontend**: [college-management-system-vof5.vercel.app](https://college-management-system-vof5.vercel.app/)
- **Backend API**: [college-management-system-iyxw.onrender.com](https://college-management-system-iyxw.onrender.com/)

---

## ✨ Features

### 👤 Admin Dashboard
- **User Management**: Register, update, and manage Admin, Faculty, and Student accounts.
- **Academic Setup**: Manage Branches, Subjects, and Exams.
- **Global Notices**: Post university-wide announcements.
- **Profile Control**: Manage personal and institutional details.

### 👨‍🏫 Faculty Portal
- **Material Management**: Upload and share study materials (PDFs, docs) via Cloudinary.
- **Marks Management**: Simplified bulk entry for student marks across different exams and subjects.
- **Timetable View**: Access department-specific schedules.
- **Student Finder**: Quick lookup for student details and performance.

### 🎓 Student Portal
- **Dashboard**: Track upcoming exams and recent notices.
- **Material Hub**: Download study materials shared by faculty.
- **Performance View**: Real-time access to exam results and remarks.
- **Schedules**: Personalized timetable view.

---

## 🛠️ Technology Stack

**Frontend:**
- **React.js**: Functional components with Hooks.
- **Redux**: Global state management.
- **Tailwind CSS**: Modern, responsive UI design.
- **Axios**: Intelligent API request handling with interceptors.
- **React-Hot-Toast**: Elegant notification system.

**Backend:**
- **Node.js & Express**: Scalable API architecture.
- **MongoDB Atlas**: Cloud-based NoSQL database.
- **Cloudinary**: Production-grade storage for profiles and academic materials.
- **Multer**: Multi-part form data handling.
- **JWT**: Secure stateless authentication and role-based access.

---

## ⚙️ Environment Variables

To run this project locally, create a `.env` file in both the `backend` and `frontend` directories.

### Backend `.env`
```env
MONGODB_URI=your_mongodb_connection_string
PORT=4000
FRONTEND_API_LINK=http://localhost:3000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Frontend `.env`
```env
REACT_APP_APILINK=http://localhost:4000/api
REACT_APP_MEDIA_LINK=http://localhost:4000/media
```

---

## 💻 Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Himanshu-Khirale/College-Management-System.git
   ```

2. **Install Backend Dependencies**:
   ```bash
   cd backend
   npm install
   npm start
   ```

3. **Install Frontend Dependencies**:
   ```bash
   cd ../frontend
   npm install
   npm start
   ```

---

## 🛡️ CORS & Security
The system is configured with a robust CORS policy that dynamically whitelists production origins (Vercel) and development environments (Localhost), supporting `GET`, `POST`, `PUT`, `DELETE`, and `PATCH` methods with full credential support.

## 📄 License
This project is for academic purposes. Feel free to fork and use it!

---

**Developed with ❤️ by [Himanshu Khirale](https://github.com/Himanshu-Khirale)**
