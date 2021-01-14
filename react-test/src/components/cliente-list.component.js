import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cliente = props => (
  <tr>
    <td>{props.cliente.cnpj}</td>
    <td>{props.cliente.razao_social}</td>
    <td>{props.cliente.dia}</td>
    <td>{props.cliente.horario}</td>
    <td>{props.cliente.usuarios}</td>
    <td>
      {/* <Link to={"/edit/"+props.cliente._id}>edit</Link> | <a href="#" onClick={() => { props.deleteCliente(props.cliente._id) }}>delete</a> */}
    </td>
  </tr>
)

export default class ClienteList extends Component {
  constructor(props) {
    super(props);

    this.deleteCliente = this.deleteCliente.bind(this)

    this.state = {cliente: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/cliente/')
      .then(response => {
        this.setState({ cliente: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteCliente(id) {
    axios.delete('http://localhost:5000/cliente/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      cliente: this.state.cliente.filter(el => el._id !== id)
    })
  }

  clienteList() {
    return this.state.cliente.map(currentcliente => {
      return <Cliente cliente={currentcliente} deleteCliente={this.deleteCliente} key={currentcliente._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Clientes</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Cnpj</th>
              <th>Razão Social</th>
              <th>Dia</th>
              <th>Horário</th>
              <th>Usuários</th>
            </tr>
          </thead>
          <tbody>
            { this.clienteList() }
          </tbody>
        </table>
      </div>
    )
  }
}

