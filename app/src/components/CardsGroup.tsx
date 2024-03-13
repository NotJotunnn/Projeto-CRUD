import Card from './Card'

const CardsGroup = () => {

  // TODO: Acessar dados de tarefas já geradas

  // TODO: Adicionar função ativada ao pressionar o botão "✅" para completar (deletar)
  // TODO: Adicionar função ativada ao pressionar o botão "🔄" para dar update

  // TODO: Passar ambas funções anteriores para o componente <Card /> abaixo

  // TODO: Adicionar mapeamento à partir de estado para gerar visualização dos dados na tela

  return (
    <div className="flex flex-col gap-[15px] items-center w-full min-h-[screen] mb-[42px]">
      <Card />
    </div>
  );
}
 
export default CardsGroup;