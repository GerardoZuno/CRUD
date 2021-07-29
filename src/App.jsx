import React, { useState } from "react";
import shortid from "shortid";

function App() {
  const [tarea, setTarea] = useState("caminar");
  const [lista, setLista] = useState([]);
  const [edit, setEdit] = useState(false);
  const [idEdit, setEditId] = useState('');
  const [error, setError] = useState(null)

  




  const addTaks = (e) => {
    e.preventDefault();

    if (!tarea.trim()) {
      console.log("Elemento vacio");
      setError('Error, Escriba una tarea.')
      return;
    }
    setError(null)
    console.log(tarea);
    setLista([
      ...lista,
      {
        id: shortid.generate(),
        description: tarea,
      },
    ]);

    setTarea("");
  };

  const deleteTask =  (id) => {
    console.log(id);

    const arrayFiltrado = lista.filter(item => item.id !== id); 
    setLista(arrayFiltrado)
  };

  const updateTask = tarea => {
    console.log(tarea);
    setEdit(true)
    setTarea(tarea.description)
    setEditId(tarea.id)
  }

  const updatedTask = (e) => {
    e.preventDefault();
    console.log(tarea)
    if (!tarea.trim()) {
      console.log("Elemento vacio");
      setError('Error, Escriba una tarea.')

      return;
    }
    setError(null)

    const arrayEditado = lista.map
    (item => item.id === idEdit ? {idEdit:idEdit, description:tarea} : item
      )
    setLista(arrayEditado)
    setEdit(false)
    setTarea('')
    setEditId('')
  

  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
            {
            (lista.length < 1 ? (<h1>No hay tareas</h1>) :
            lista.map((tarea) => (
              <li key={tarea.id} className="list-group-item">
                <span className="lead">
                  <strong>{tarea.description}</strong>
                </span>
                <button
                  className="btn btn-danger btn-sm float-right mx-2"
                  onClick={(e) => deleteTask(tarea.id)}
                >
                  Eliminar
                </button>
                <button 
                className="btn btn-warning btn-sm"
                onClick={(e) => updateTask(tarea)}
                >
                Editar
                </button>
              </li>
            )))
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {
              edit ? 'Editar Tarea' : 'Agregar Tarea'
            }            
          </h4>
          {
            error ? <span className="text-danger">{error}</span> : null

          }
          <form onSubmit={edit ? updatedTask : addTaks}>
            <input
              className="form-control mb-2"
              type="text"
              placeholder="ingrese tarea"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            />
            {
              edit ? (
                <button className="btn btn-warning btn-block" type="submit">
                Editar
              </button>
              ) : (
                <button className="btn btn-warning btn-block" type="submit">
                Agregar
              </button>
              )
            }
           
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
