localStorage.clear()
const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "e@e.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Report",
        taskDescription: "Prepare the monthly sales report",
        taskDate: "2026-03-12",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve login authentication issue",
        taskDate: "2026-03-09",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss requirements with client",
        taskDate: "2026-03-05",
        category: "Meeting"
      }
    ]
  },

  {
    id: 2,
    firstName: "Amit",
    email: "employee2@gmail.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create UI design for homepage",
        taskDate: "2026-03-13",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update CSS",
        taskDescription: "Improve responsive layout",
        taskDate: "2026-03-11",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve navbar overlap issue",
        taskDate: "2026-03-08",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Prototype Testing",
        taskDescription: "Test new design prototype",
        taskDate: "2026-03-07",
        category: "Testing"
      }
    ]
  },

  {
    id: 3,
    firstName: "Priya",
    email: "employee3@gmail.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with backend API",
        taskDate: "2026-03-14",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Setup MongoDB collections",
        taskDate: "2026-03-10",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve API timeout error",
        taskDate: "2026-03-06",
        category: "Backend"
      }
    ]
  },

  {
    id: 4,
    firstName: "Neha",
    email: "employee4@gmail.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare API documentation",
        taskDate: "2026-03-15",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Unit Testing",
        taskDescription: "Write unit tests for modules",
        taskDate: "2026-03-09",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Testing",
        taskDescription: "Check application performance",
        taskDate: "2026-03-04",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve database query speed",
        taskDate: "2026-03-11",
        category: "Database"
      }
    ]
  },

  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@gmail.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy App",
        taskDescription: "Deploy project on server",
        taskDate: "2026-03-16",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Setup CI/CD",
        taskDescription: "Configure CI/CD pipeline",
        taskDate: "2026-03-12",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDescription: "Monitor server performance",
        taskDate: "2026-03-08",
        category: "Maintenance"
      }
    ]
  }
]

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123"
  }
];


export const setLocalStorage = () =>{
  localStorage.setItem('employees',JSON.stringify(employees));
  localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = () =>{
  const employees=JSON.parse(localStorage.getItem('employees'))
  const admin=JSON.parse(localStorage.getItem('admin'))
  return {employees,admin};
}