# 🚀 Employee Management System (React)

A modern **Employee Management System** built using **React, Context API, Tailwind CSS, and LocalStorage**.  
This application allows an **Admin to create and assign tasks to employees**, while employees can **view and manage their assigned tasks through a dedicated dashboard**.

This project demonstrates **component-based architecture, role-based authentication, global state management, and persistent client-side storage**.

---

# ✨ Features

## 🔐 Authentication
- Admin Login
- Employee Login
- Role-based dashboard rendering

## 👨‍💼 Admin Dashboard
- Create and assign tasks to employees
- View all employees
- Track task statistics
- Monitor task status

## 👩‍💻 Employee Dashboard
Employees can view tasks categorized as:

- 🆕 New Tasks  
- ⚡ Active Tasks  
- ✅ Completed Tasks  
- ❌ Failed Tasks  

## 📊 Task Management
- Dynamic task creation
- Task status tracking
- Task statistics for each employee

## 💾 Local Data Persistence
- Uses **LocalStorage** to store employee and task data
- Simulates backend functionality without server integration

## 🎨 UI / UX
- Clean dashboard layout
- Responsive design
- Styled using **Tailwind CSS**

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|--------|
| React.js | Frontend framework |
| JavaScript (ES6) | Application logic |
| Tailwind CSS | UI styling |
| LocalStorage | Data persistence |

---

# 📂 Project Structure

```
src
│
├── components
│   ├── Auth
│   │   └── Login.jsx
│   │
│   ├── Dashboard
│   │   ├── AdminDashboard.jsx
│   │   ├── EmployeeDashboard.jsx
│   │   ├── Header.jsx
│   │   ├── CreateTask.jsx
│   │   └── AllTask.jsx
│   │
│   ├── TaskList
│   │   ├── TaskList.jsx
│   │   ├── NewTask.jsx
│   │   ├── AcceptTask.jsx
│   │   ├── CompleteTask.jsx
│   │   └── FailedTask.jsx
│
├── context
│   └── AuthProvider.jsx
│
├── utils
│   └── localStorage.js
│
├── App.jsx
└── main.jsx
```

---


---

# ⚙️ Installation & Setup

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/employee-management-system-react.git
```

Navigate to the project folder

```bash
cd employee-management-system-react
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

# 🔑 Demo Credentials

## Admin Login

```
Email: admin@gmail.com
Password: 123
```

## Employee Login

```
Email: e@e.com
Password: 123
```

---

# 🎯 Learning Outcomes

Through this project I have demonstrated my knowledge of:

- React component architecture
- Role-based UI rendering
- Task management systems
- Client-side data persistence using LocalStorage
- Responsive UI design with Tailwind CSS

---

# 🔮 Future Improvements

Potential improvements include:

- Backend integration using **Node.js & Express**
- Database integration with **MongoDB**
- REST API implementation
- JWT authentication
- Real-time updates
- Task notifications

---

# 👨‍💻 Author

**Vikash Singh**

GitHub:  
https://github.com/YOUR_USERNAME

---

⭐ If you found this project useful, please consider giving it a **star** on GitHub!
