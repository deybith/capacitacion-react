import React, { Component } from 'react'

class PropComponent extends Component {
	render() {
		return <div>
			Hola Mundo en props y el nombre que llega es {this.props.nombre}
		</div>
	}
}

PropComponent.defaultProps = {
	nombre: ''
}

export default PropComponent;