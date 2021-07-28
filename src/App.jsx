function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Hello World</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Nombre de la Tarea</span>
              <button className="btn btn-danger btn-sm float-right mx-2" >Eliminar</button>
              <button className="btn btn-warning btn-sm">Editar</button>

            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
        </div>
      </div>
    </div>
  );
}

export default App;