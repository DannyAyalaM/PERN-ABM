import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

import { Link } from "react-router-dom";



import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';


const baseUrl = "http://localhost:3000";

class listComponent extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      listEmployee:[]
    }
  }

  componentDidMount(){

    this.loadEmployee();

  }

  loadEmployee(){
    axios.get("http://192.168.0.2:3000/employee/list")
    .then(res => {
      const data = res.data.data;
      this.setState({ listEmployee:data });
    })
    .catch(error => {
      alert(error)
    });
  }

  render()
  {
    return (
      <table class="table table-hover table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Rol</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Dirección</th>
            <th scope="col">Teléfono</th>
            <th colspan="2">Opciones</th>
          </tr>
        </thead>
        <tbody>
               
          {this.loadFillData()}
        </tbody>
      </table>
    );
  }

  loadFillData(){

    return this.state.listEmployee.map((data)=>{
      return(
        <tr>
          <th>{data.id}</th>
          <td>{data.role.role}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.address}</td>
          <td>{data.phone}</td>
          <td>
          <Link class="btn btn-outline-info "  to={"/edit/"+data.id} >Editar</Link>
          </td>
          <td>
          <button class="btn btn-outline-danger" onClick={()=>this.onDelete(data.id)}> Eliminar </button>
          </td>
        </tr>
      )
    });
  }

  onDelete(id){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  sendDelete(userId)
  {
    // url de backend
    const baseUrl = "http://localhost:3000/employee/delete"    // parameter data post
    // network
    axios.post(baseUrl,{
      id:userId
    })
    .then(response =>{
      if (response.data.success) {
        Swal.fire(
          'Deleted!',
          'Your employee has been deleted.',
          'success'
        )
      }
    })
    .catch ( error => {
      alert("Error 325 ")
    })
  }
}

export default listComponent;