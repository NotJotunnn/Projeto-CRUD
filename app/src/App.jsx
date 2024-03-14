import CardsGroup from "./components/CardsGroup"
import TaskForm from "./components/TaskForm"

function App() {

  // TODO: Adicionar estado para guardar os dados das tarefas
  // TODO: Passar estado dos dados das tarefas para <CardsGroup />


  // TODO: Adicionar função para alterar os dados das tarefas
  // TODO: Passar função para alterar os dados das tarefas para <TaskForm />


  return (
    <div className="flex flex-col gap-5 items-center w-full min-h-screen bg-[#eee]">
      <h1 className="text-[#222] text-center text-7xl font-semibold mt-[42px]">Tarefas!</h1>
      <TaskForm />
      <CardsGroup />
    </div>
  )
}

export default App
