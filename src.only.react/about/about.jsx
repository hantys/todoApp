import React, { Component } from 'react'
import PageHeader from '../template/pageHeder'

export default class About extends Component {
  render() {
    return (
      <div>
        <PageHeader name='Sobre' small='Nós' ></PageHeader>
        <h2>Nossa história</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatibus illum possimus minima molestiae veritatis, vel ex obcaecati ut cum enim sit alias ratione at quibusdam eum voluptas eos consectetur.</p>
        <h2>Missão e visão</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, optio pariatur quos distinctio soluta tempora exercitationem eius veritatis explicabo repellat recusandae dicta minima corrupti neque beatae labore, earum quia aliquam.</p>
      </div>
    )
  }
}