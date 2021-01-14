import React, { Component } from 'react';
import axios from 'axios';
// import "react-datepicker/dist/react-datepicker.css";
// import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

export default class EditCliente extends Component {
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
      usuarios: 0
    //   users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/cliente/add'+this.props.match.params.id)
      .then(response => {
        this.setState({
          cnpj: response.data.cnpj,
          razao_social: response.data.razao_social,
          dia: response.data.dia,
          horario: response.data.horario,
          usuarios: response.data.usuarios,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/cliente/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.cnpj),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

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

    axios.post('http://localhost:5000/cliente/update/' + this.props.match.params.id, cliente)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Cliente Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Cnpj: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.cnpj}
              onChange={this.onChangeCnpj}>
              {
                this.state.cnpj.map(function(cnpj) {
                  return <option 
                    key={cnpj}
                    value={cnpj}>{cnpj}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Razão Social: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.razao_social}
              onChange={this.onChangeRazao_Social}
              />
        </div>
        <div className="form-group">
          <label>Dia </label>
          <input 
              type="number" 
              className="form-control"
              value={this.state.dia}
              onChange={this.onChangeDia}
              />
        </div>
        <div className="form-group">
          <label>Horario </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.horario}
              onChange={this.onChangeHorario}
              />
        </div>
        <div className="form-group">
          <label>Usuario </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.usuarios}
              onChange={this.onChangeUsuarios}
              />
        </div>
        
        

        <div className="form-group">
          <input type="submit" value="Edit Cliente Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}