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
      dia:0,
      horario:'',
      usuarios: 0
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
        razao_social: this.state.razao_social,
        dia: this.state.dia,
        horario: this.state.horario,
        usuarios: this.state.usuarios
    }

    console.log(cliente);

    axios.post('http://localhost:5000/users/add', cliente)
      .then(res => console.log(res.data));

    this.setState({
      cnpj: '',
      razao_social: '',
      dia:0,
      horario:'',
      usuarios: 0
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}