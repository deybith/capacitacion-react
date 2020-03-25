import React from "react";

import { connect } from 'react-redux'


class App extends React.Component {

  render() {
     return (
         <div>
            Hola mundo {this.props.nombreCliente} {this.props.apellidoCliente}
         </div>
      )
  }
}


const mapStateToProps = (state) => {
  return { 
    nombreCliente: state.Cliente.nombre,
    apellidoCliente: state.Cliente.apellido,
  }
}

export default connect(mapStateToProps,null)(App);
