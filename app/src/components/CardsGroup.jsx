import Card from './Card'

const CardsGroup = (props) => {

  const { task, setTask } = props 

  function removeCardTask(id) {
    // ! === testa os tipos, você quis dizer ==?

    const updateTasks = task.filter(item => item.id !== id)
    setTask(updateTasks)
    
    //ERROR
  }

  // ! Você precisa de 2 variáveis para atualizar não apenas uma! kk
  function utualizaCardTask(id) {
    // ! === testa os tipos, você quis dizer ==?
    // ! Cuidado, você está filtrando o array todo e so vai retornar um único item, aquele em q os id baterem!
    // ! Minha sugestão é: faça isso para encontrar oq vc precisa alterar, e depois coloque oq foi alterado (vc precisa passar o título da tarefa também! kk)
    // ! Inclusive se preferir, pode encurtar a recursividade usando .map, achando a variável com id == do q foi passado e alterar tudo em uma linha só
    // ! Ex: task.map(item => {
    // !  if(item.id == id) return item.task == novaTask
    // !})
    const updateTasks = task.find(item => item.id === id)
     setTask(updateTasks)
    
    // ! procura por isso na loja de extensões aaron-bond.better-comments
    // ! é melhor para trabalhar com comentários! kk
    // ! simbolo ! no início deixa a linha vermelha na extensão
    // ? simbolo ? deixa a linha azul
    // * simbolo * no início deixa a linha verde
    // TODO simbolo TODO no início deixa a linha laranja
    // ! Esses são os comandos q eu uso
    //ERROR
  }

  // TODO: Acessar dados de tarefas já gerada

  // TODO: Adicionar mapeamento à partir de estado para gerar visualização dos dados na tela

  return (
    <div className="flex flex-col gap-[15px] items-center w-full min-h-[screen] mb-[42px]">

      {task && task.map(element => 
        <Card 
          props={element}  
          key={element.id} 
          remove={removeCardTask} 
          update={utualizaCardTask}
        /> )}

    </div>
  );
}
 
export default CardsGroup;