'use client'

import { newTodo } from '@/utils/actions'
import { useState } from 'react'

const NewTodoForm = () => {
  const [state, setstate] = useState('')

  return (
    <div>
      <form action={newTodo}>
        <input type="text" name="content" id="" className="border border-black" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default NewTodoForm
