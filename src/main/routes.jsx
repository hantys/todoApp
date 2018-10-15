import React from 'react'
// import {Router, Route, Redirect, hashHistory} from 'react-router'
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
  <Router>
    <Switch>
      <Route path='/todos' component={Todo} />
      <Route path='/about' component={About} />
      <Redirect from='/' to='/todos' />
    </Switch>
  </Router>
)