import React from 'react'
import IconButton from '../template/iconButton'
export default props => {
  const renderRows = () => {
    const list = props.list || []
    return (
      list.map(todo => (
        <tr key={todo._id}>
          <td className={todo.done ? 'markedAsDone' : ''}>
            {todo.description}
          </td>
          <td>
            <IconButton styles='success' icon='check' onClick={() => props.handleMarkDone(todo)} hide={todo.done} />
            <IconButton styles='warning' icon='undo' onClick={() => props.handleMarkPending(todo)} hide={!todo.done} />
            <IconButton styles='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} hide={!todo.done} />
          </td>
        </tr>
      ))
    )
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className='tableActions'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}