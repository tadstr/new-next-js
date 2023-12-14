import NewTodoForm from '@/components/NewTodoForm'
import React from 'react'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <NewTodoForm />
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
