import Card from './Card'

const CardsGroup = (props) => {

  const {task} = props 




 

  // TODO: Acessar dados de tarefas já gerada

  // TODO: Adicionar função ativada ao pressionar o botão "✅" para completar (deletar)
  // TODO: Adicionar função ativada ao pressionar o botão "🔄" para dar update

  // TODO: Passar ambas funções anteriores para o componente <Card /> abaixo

  // TODO: Adicionar mapeamento à partir de estado para gerar visualização dos dados na tela

  return (
    <div className="flex flex-col gap-[15px] items-center w-full min-h-[screen] mb-[42px]">

      {task && task.map(element => <Card props={element} key={element.id} /> )}

    </div>
  );
}
 
export default CardsGroup;