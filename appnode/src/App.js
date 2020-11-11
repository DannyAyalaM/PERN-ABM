import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from './module/form';
import List from './module/list';
import Edit from './module/edit';

function App() {

  return (
    <Router>

      <div className="App">
        <div class="container py-4">
          <div class="row">

          <Route path="/" exact component={List} />
          <Route path="/form" component={Form} />
          <Route path="/edit/:id" component={Edit} />

          </div>
        </div>
        <div class="container">
          <div class="d-flex justify-content-end">
              <Link class="btn btn-info" to="/"> Lista de Empleados</Link>
              
              <Link class="btn btn-info ml-2"  to="/form">Agregar Empleados</Link>
          </div>
        </div>

      </div>
            
    </Router>
  );
}

export default App;