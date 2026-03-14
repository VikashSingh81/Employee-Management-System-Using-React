import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import TaskListNumbers from './components/Dashboard/TaskListNumbers'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'



const App = () => {

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data);
    }
    
  },[])
  
  const [user, setuser] = useState(null)
  const [loggedInUserData,setloggedInUserData]=useState(null)
  const [userData,SetUserData] =useContext(AuthContext)

    

  const handleLogin = (email,password) => {
    if(email=='admin@gmail.com' && password =='123')
    {
      setuser('admin')
     localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(userData){
        const employee=userData.find((e)=> e.email == email && e.password == password)
        if(employee){
          setuser("employee")
          setloggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
        }
    }
    else{
      alert("Invalid Credentials")
    }
  }

  // handleLogin('admin@me.com',123)

  return (
    <>

    {!user ? <Login handleLogin={handleLogin} />: ''}
    {user === "admin" && <AdminDashboard  changeUser={setuser}/>}

    {user === "employee" && (
      <EmployeeDashboard changeUser={setuser} data={loggedInUserData} />
    )}
    
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>


  )
}

export default App