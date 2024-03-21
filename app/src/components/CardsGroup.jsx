import Card from './Card'

const CardsGroup = ({props}) => {

  const { task, setTask } = props 

  function removeCardTask(id) {
    const remove = task.filter(item => item.id !== id)
    setTask(remove)
  }


  function atualizaCardTask(id, newTask) {

    // TODO: Arrumar função abaixo e utiliza-la em <Card />
    // ? Sugestão: Utilizar Array temporário no escopo da função para adicionar dados e depois alterar no setTask()
    const updateTasks = task.map(item => {
      if (item.id == id) return item.task == newTask
    })
     setTask(updateTasks)
  }


  // TODO: Adicionar função para alterar tarefas
  // TODO: Passar função para alterar tarefas para <Cards />





  // *: Acessar dados de tarefas já gerada

  // *: Adicionar mapeamento à partir de estado para gerar visualização dos dados na tela

  return (
    <div className="flex flex-col gap-[15px] items-center w-full min-h-[screen] mb-[42px]">

      {task && task.map(element => 
        <Card 
          props={{...element, removeTask: removeCardTask, updateTask: atualizaCardTask}}  
          key={element.id} 
        /> )}

    </div>
  );
}
 
export default CardsGroup;