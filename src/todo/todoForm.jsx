import React, { Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ChangeDescription, search, add } from './todoAction'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentDidMount() {
    this.props.search()
  }

  keyHandler(e) {
    const {add, search, description} = this.props
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description)
    } else if (e.key === 'Escape') {
      this.props.handleClear()
    }
  }
  
  render() {
    const {add, search, description, ChangeDescription} = this.props
    return(
      <div role='form' className='todoForm row'>
        <Grid cols='12 9 10'>
          <input id="description" className='form-control' placeholder='Adicione uma tarefa' onChange={ChangeDescription} onKeyUp={this.keyHandler} value={description} />
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton styles='primary' icon='plus' onClick={() => add(description)} />
          <IconButton styles='info' icon='search' onClick={() => search()} />
          <IconButton styles='default' icon='close' onClick={this.props.handleClear} />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({ ChangeDescription, search, add }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)