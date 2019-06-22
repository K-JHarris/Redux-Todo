let todoId = 0
export const addTodo = newTodo => ({
  type: 'ADD_TODO',
  id: todoId++,
  newTodo: { title: newTodo, completed: false }
})

export const toggleComplete = id => ({
  type: 'TOGGLE_COMPLETE',
  id
})