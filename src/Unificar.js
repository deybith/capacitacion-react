import React from "react";
import Receptor from './ComponentReceptor'

import {
  BrowserRouter as Router,
} from "react-router-dom";

import { connect } from 'react-redux'
import { cliente as clienteAction} from './store/actions'
import PropComponent from './PropComponent'
import Rutas from './Rutas'


class App extends React.Component {

  componentDidMount() {
    console.log(this.props)
  }

  hanndlerClick = e => {
    this.props.dispatch(clienteAction({nombre:'John', apellido:'Perez'}));
  }

  render() {
     const {hanndlerClick} = this;
     return (
         <div>
          <Router>
            Hola mundo 
            <PropComponent nombre='John'/>
            <Receptor />
            <Rutas />

            <hr/>

            <button onClick={hanndlerClick}> cambiar nombre </button>
          </Router>
         </div>
      )
  }
}


export default connect(null)(App);