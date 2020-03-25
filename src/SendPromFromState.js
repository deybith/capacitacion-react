import React from 'react';
import StateHandler from './StateHandler'
import PropComponent from './PropComponent'


class App extends React.Component {

  state = {
    nombre: 'Steven',
    apellido: 'SImijaca'
  }

  constructor(props) {
    super(props);
    this.setInternalState = this.setInternalState.bind(this)
  }


  setInternalState = state => {
    this.setState(state)
  }

  render() {

    const { handlerClick } = this;
    const { nombre, apellido } = this.state;

    return (
      <div>
        <StateHandler
          setInternalState={this.setInternalState}
        />

        <PropComponent nombre={this.state.nombre} />


        <button onClick={handlerClick} > click </button>
      </div>
    )
  }
}

export default App;