import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    nombre: 'Inicial',
    apellido: '',
    count: 0,
  }


  constructor(props) {
    super(props);
  }


  componentDidMount() {
    new Promise(async (resolve, reject) => {
      await setTimeout( async ()=>  resolve("¡Éxito!"), 5000  )
    })
    .then((info)=> {
      console.log(info);
      super.setState({count : ++this.state.count});
    })
    .catch( (error)=> {
      console.log(error);
    })
  }

  componentDidUpdate() {
    if (this.state.count < 15 ) {
      new Promise(async (resolve, reject) => {
        await setTimeout( async ()=>  resolve("¡Éxito!"), 1000  )
      })
      .then((info)=> {
        console.log(info);
        super.setState({count : ++this.state.count});
      })
      .catch( (error)=> {
        console.log(error);
      })
    }
  }

  render() {
    return (
      <div>
        Hola mundo el state nombre es {this.state.nombre}
        <br/>
        contador {this.state.count}
      </div>
    )
  }
}

export default App;