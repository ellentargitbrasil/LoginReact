  
import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeCnpj = this.onChangeCnpj.bind(this);
    this.onChangeRazao_Social = this.onChangeRazao_Social.bind(this);
    this.onChangeDia = this.onChangeDia.bind(this);
    this.onChangeHorario = this.onChangeHorario.bind(this);
    this.onChangeUsuarios = this.onChangeUsuarios.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      cnpj: '',
      razao_social: '',
      dia: 0,
      horario: '',
      usuarios: ''
    }
  }

  onChangeCnpj(e) {
    this.setState({
      cnpj: e.target.value
    })
  }
  onChangeRazao_Social(e) {
    this.setState({
      razao_social: e.target.value
    })
  }
  onChangeDia(e) {
    this.setState({
      dia: e.target.value
    })
  }
  onChangeHorario(e) {
    this.setState({
      horario: e.target.value
    })
  }
  onChangeUsuarios(e) {
    this.setState({
      usuarios: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const cliente = {
      cnpj: this.state.cnpj,
      razao_social:this.state.razao_social,
      dia:this.state.dia,
      horario:this.state.horario,
      usuarios:this.state.usuarios,

    }

    console.log(cliente);

    axios.post('http://localhost:5000/users/add', cliente)
      .then(res => console.log(res.data));

    this.setState({
      cnpj: '',
      razao_social: '',
      dia: 0,
      horario: '',
      usuarios: 0

    })
  }

  render() {
    return (
      <div>
        <h3>Crie um novo usuário</h3>
       <br></br>
        <form onSubmit={this.onSubmit}>
          <div className="form-gr<laoup"> 
            <h6>CNPJ</h6>
            <input  type="text"
                required
                className="form-control"
                value={this.state.cnpj}
                onChange={this.onChangeCnpj}
                />
                <br></br>
                <div className="form-group"> 
            <h6>Razão Social</h6>
            <input  type="text"
                required
                className="form-control"
                value={this.state.razao_social}
                onChange={this.onChangeRazao_Social}
                />
                <br></br>
                <div className="form-group"> 
            <h6>Dia</h6>
            <input  type="number"
                required
                className="form-control"
                value={this.state.dia}
                onChange={this.onChangeDia}
                />
                <br></br>
                <div className="form-group"> 
            <h6>Horario</h6>
            <input  type="text"
                required
                className="form-control"
                value={this.state.horario}
                onChange={this.onChangeHorario}
                />
                <br></br>
                <div className="form-group"> 
            <h6>Usuários</h6>
            <input  type="number"
                required
                className="form-control"
                value={this.state.usuarios}
                onChange={this.onChangeUsuarios}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
          </div>
          </div>
          </div>
          </div>


        </form>
      </div>
      
    )
  }
}