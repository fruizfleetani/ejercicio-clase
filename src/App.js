import './App.css';
import Cabecera from './components/cabecera.js';
import React from 'react';
import Cuerpo from './components/cuerpo.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={titulo:'Titulo ejercicio'}
    this.modificarTitulo = this.modificarTitulo.bind(this)
  }
  render(){
  return (
    <div>
    <Header titulo={this.state.titulo}/>
    <Body tituloModificado={this.modificarTitulo}/>
    </div>
  );
  }
  modificarTitulo(){
    this.setState({titulo:'Nuevo título'})
  }
}
export default App;