import { getTask } from "../services/tareas";
import { useState, useEffect } from "react";
import { deleteTask } from "../services/tareas";
import "../styles/tareas.css";
import { Editar } from "./Editar";

const MostrarTareas = () => {
  const [tareas, setTareas] = useState([]);

  const traerTask = async () => {
    const dataTask = await getTask();
    setTareas(dataTask);
  };

  useEffect(() => {
    traerTask();
  }, []);

  const eliminar = async (id) => {
    await deleteTask(id);
    window.location.reload();
  };

  return (
    <div id="contenedorTask">
      {tareas.map((task, index) => {
        return (
          <div id="tareas" key={index}>
            <div id="divi">
              <div id="tarea">Tarea: {task.task}</div>
              <div id="prioridad">Prioridad: {task.prioridad}</div>
            </div>
            <div id="divi2">
              <button id="btnEliminar" onClick={() => eliminar(task.id)}>
                eliminar
              </button>
              <Editar editarModal={task} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MostrarTareas;
