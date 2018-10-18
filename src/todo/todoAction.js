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
  return dispatch => {
    axios.post(URL, {description})
      .then(resp => dispatch({ type: 'todo_added', payload: resp.data }))
      .then(resp => dispatch(search()))
  }
}