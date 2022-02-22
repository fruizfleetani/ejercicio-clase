import React from "react";

class Cuerpo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            lista_nombres : ['Fernando','Benzema','Valverde','Asensio']}
        this.modificarTitulo = this.modificarTitulo.bind(this)
        this.anadirNombre = this.anadirNombre.bind(this)
    }

    render(){
        const nombre = this.state.lista_nombres.map((el,index)=>{return <li key={index}>{el}</li>})
        return<div><ul>{nombre}</ul>
        <button onClick={this.modificarTitulo}>Cambiar el título</button>
        <button onClick={this.anadirNombre}>Añadir un nombre a la lista</button>
        </div>
    }

    modificarTitulo(){
        this.props.tituloModificado()
    }
    anadirNombre(){
        let resul = this.state.lista_nombres
        resul.push('Mbappé')
        this.setState({lista_nombres:resul})
    }
}
export default Cuerpo