const initial = { description: '', list: [] }

export default (state = initial, action) => {
  switch(action.type) {
    case 'description_change':
      return {...state, description: action.payload}
    case 'todo_searched':
      return {...state, list: action.payload.data}
    case 'todo_added':
      return {...state, description: ''}
    default:
      return state
  }
}