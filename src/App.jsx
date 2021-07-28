import React, {useState} from 'react'
import shortid from 'shortid';


function App() {
  const [tarea, setTarea] = useState('correr')
  const [lista, setLista] = useState([])



  const addTaks = (e) => {
     e.preventDefault()

     if(!tarea.trim()) {
       console.log('esta vacio')
       return
     }
     console.log(tarea)
     setLista([
       ...lista, {
         id: shortid.generate(),
         Description: tarea
       }
     ])

     setTarea('')
  }

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
          <form onSubmit={addTaks}>
            <input  
            className='form-control mb-2'
            type='text'
            placeholder='ingrese tarea'
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
            />
            <button className="btn btn-dark btn-block" type="submit">Agregar Tarea</button>
            
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
