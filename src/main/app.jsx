import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react'
import { Container} from 'reactstrap';

import Header from '../template/menu'
import Routes from './routes'


export default props => (
  <span>
    <Container>
      <Header />
      <Routes />
    </Container>
  </span>
)
