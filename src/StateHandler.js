import React from 'react';


class App extends React.Component {
  state = {
    nombre: 'Inicial',
    apellido: '',
    count: 0,
  }

  constructor(props) {
    super(props);
  }

  handlerChange = e => {
    let name = e.target.id;
    let value = e.target.value;
    
    this.setState({ [name]: value }, () => {
      this.props.setInternalState(this.state);
    });
  
  }

  handleClick = e => {
    e.preventDefault();

    console.log(this.state);
  }


  render() {
    return (
      <div>
        
          <div>
            <input 
              type="text" 
              id='nombre' 
              value={this.state.nombre}
              onChange={this.handlerChange}
            />
          </div>
          <div>
            <input 
              type="text"
              id='apellido'
              value={this.state.apellido}
              onChange={this.handlerChange}
              />

            <button onClick={this.handleClick}> Envia </button>
          </div>
        
      </div>
    )
  }
}

export default App;