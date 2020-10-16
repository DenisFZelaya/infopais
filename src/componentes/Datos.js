import React, { Component } from "react";

class Datos extends Component {
  render() {
    console.log("Desde Datos");


    const pais = this.props.pais.name;
    const alpa1 = this.props.pais.alpha2Code;
    const alpa2 = this.props.pais.alpha3Code;
    const imagen = this.props.pais.flag;
    const capital = this.props.pais.capital;
    const codigoArea = this.props.pais.callingCodes;
    const dominioWeb = this.props.pais.topLevelDomain;
    const region = this.props.pais.region;
    const subRegion = this.props.pais.subregion;
    const poblacion = this.props.pais.population;
    const area = this.props.pais.area;
    //const codeMoneda = this.props.pais[0];

    const currencies = this.props.pais.currencies;
    console.log(currencies);

    return (
      <div className="card text-center container">
        <div className="card-header">Datos Generales: {pais}</div>
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="list-group">
                <li className="list-group-item">Codigo Alfa N1: {capital}</li>
                <li className="list-group-item">Codigo Alfa N1: {alpa1}</li>
                <li className="list-group-item">Codigo Alfa N1: {alpa2}</li>
                <li className="list-group-item">Dominio Web: {dominioWeb}</li>
              </ul>
            </div>
            <div className="col">
              <img src={imagen} alt="bandera" className="img-fluid" />
              <ul class="list-group">
                <li class="list-group-item">Poblacion: {poblacion}</li>
                <li class="list-group-item">Area: {area}km2</li>
              </ul>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <ul className="list-group">
                <li className="list-group-item active">Region</li>
                <li className="list-group-item">Continente: {region}</li>
                <li className="list-group-item">Sector: {subRegion}</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
            <div className="col">
              <ul className="list-group">
                <li className="list-group-item">Codigo Alfa N1: {alpa1}</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card-footer text-muted">Denis Federico Zelaya</div>
      </div>
    );
  }
}

export default Datos;
