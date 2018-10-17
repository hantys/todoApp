import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const ChangeDescription = (event) => ({
  type: 'description_change',
  payload: event.target.value
})

export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`)
  return {
    type: 'todo_searched',
    payload: request
  }
}

export const add = (description) => {
  const request = axios.post(URL, {description})
  return [
    { type: 'todo_added', payload: request }, search()
  ]
}