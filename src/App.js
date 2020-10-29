import React from "react";
import "./App.css";
import Datos from "./componentes/Datos";
import Formulario from "./componentes/Formulario";

class App extends React.Component {
  state = {
    pais: []
  };

  componentDidMount() {
    this.consultarPais();
  }

  consultarPais = (nuevoPais = "hn") => {
    let url = `https://restcountries.eu/rest/v2/alpha/${nuevoPais}`;

    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((pais) => {
        this.setState({
          pais: pais
        });

      });
  };

  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Informacion Paises del Mundo</h1>
            <p className="lead">Nunca pares de aprender.</p>
          </div>
        </div>
        <Formulario consultarPais={this.consultarPais} />
        <Datos
          pais = {this.state.pais}
        />
      </div>
    );
  }
}

export default App;
