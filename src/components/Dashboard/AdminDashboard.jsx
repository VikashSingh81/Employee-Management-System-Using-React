import React from 'react'
import Header from './Header'
import CreateTask from './CreateTask'
import AllTask from './AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-7'>
        <Header changeUser = {props.changeUser}/>
        <CreateTask />
        <AllTask />

    </div>
  )
}

export default AdminDashboard