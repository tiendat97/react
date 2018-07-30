let number = 0;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: number++,
  text
})

