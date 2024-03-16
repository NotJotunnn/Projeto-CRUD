import Card from './Card'

const CardsGroup = ({props}) => {

  const { task, setTask } = props 

  function removeCardTask(id) {
    const remove = task.filter(item => item.id !== id)
    setTask(remove)
  }


  function atualizaCardTask(id, newTask) {
    
    const updateTasks = task.map(item => {
      if (item.id == id) return item.task == newTask
    })
     setTask(updateTasks)
  }








  // TODO: Acessar dados de tarefas já gerada

  // TODO: Adicionar mapeamento à partir de estado para gerar visualização dos dados na tela

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