import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeder'
import TodoFrom from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'
export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {description: '', list: []}

    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkPending = this.handleMarkPending.bind(this)
    this.handleMarkDone = this.handleMarkDone.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.refresh = this.refresh.bind(this)
    this.refresh()
  }

  handleAdd () {
    const description = this.state.description
    axios.post(URL, { description }).then(resp => this.refresh())
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  handleMarkPending(todo) {
    axios.put(`${URL}/${todo._id}`, {...todo, done: false}).then(resp => this.refresh(this.state.description))

  }

  handleMarkDone(todo) {
    axios.put(`${URL}/${todo._id}`, {...todo, done: true}).then(resp => this.refresh(this.state.description))
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh(this.state.description))
  }

  handleClear() {
    this.refresh()
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt${search}`).then(resp => this.setState({...this.state, description, list: resp.data}) )

  }

  handleChange (e) {
    this.setState({...this.state, description: e.target.value})
  }

  render() {
    return (
      <div>
        <PageHeader name="Todo" small='Cadastro' ></PageHeader>
        <TodoFrom
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
          description={this.state.description} />
        <TodoList list={this.state.list} handleRemove={this.handleRemove} handleMarkDone={this.handleMarkDone} handleMarkPending={this.handleMarkPending} />
      </div>
    )
  }
}