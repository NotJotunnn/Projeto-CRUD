import { useState } from "react"
import CardsGroup from "./components/CardsGroup"
import TaskForm from "./components/TaskForm"

function App() {

  // * Adicionar estado para guardar os dados das tarefas
  // * Passar estado dos dados das tarefas para <CardsGroup />
  // TODO: Acessar os dados do banco

  const [task, setTask] = useState([{"id":4,"task":"cleanupAvenue"},{"id":5,"task":"cleanupAvenue"},{"id":"182ea6b9-19c0-4a42-b435-55c6ce501eb5","task":"takeTheGarbageOut"}]);

  //const props = {task, setTask};


  // TODO: Adicionar função para adicionar tarefas
  // TODO: Passar função para adcionar tarefas para <TaskForm />
  // TODO: Passar função de alteração dos dados das tarefas para <TaskForm />

  // TODO: Adicionar função para alterar tarefas
  // TODO: Passar função para alterar tarefas para <CardsGroup />


  return (
    <div className="flex flex-col gap-5 items-center w-full min-h-screen bg-[#eee]">
      <h1 className="text-[#222] text-center text-7xl font-semibold mt-[42px]">Tarefas!</h1>
      <TaskForm />
      <CardsGroup task={task}/>
    </div>
  )
}

export default App
