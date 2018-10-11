import React from 'react'
import {Router, Route, Redirect} from 'react-router-dom'
import createHistory from "history/createBrowserHistory"

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
  <Router history={createHistory}>
    <div>
      <Route path='/todos' component={Todo} />
      <Route path='/about' component={About} />
      <Redirect from='*' to='/todos' />
    </div>
  </Router>
)
