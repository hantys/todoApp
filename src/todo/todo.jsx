import React, { Component } from 'react'
import PageHeader from '../template/pageHeder'
import TodoFrom from './todoForm'
import TodoList from './todoList'
export default class Todo extends Component {
  render() {
    return (
      <div>
        <PageHeader name="Todo" small='Cadastro' ></PageHeader>
        <TodoFrom />
        <TodoList />
      </div>
    )
  }
}