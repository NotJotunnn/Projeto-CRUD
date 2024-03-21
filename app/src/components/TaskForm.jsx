import { useState } from "react";

const TaskForm = () => {

  // TODO: Acessar props enviados e desconstruir dele a função para alterar as tasks

  const placeholderList = [
    'Preciso tirar o lixo...',
    'Preciso abrir a janela...',
    'Preciso tocar na grama...',
    'Preciso arrumar um emprego...'
  ]

  const [inputValue, setInputValue] = useState()
  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholderList[0])
  

  function inputChange(e) {
    setInputValue(e.target.value)
    setCurrentPlaceholder(placeholderList[Math.floor(Math.random() * (placeholderList.length))])
  }

  // TODO: Criar uma função onclick para enviar os dados para o banco E à variável task (usar setTask)
  // TODO: Adicionar validação de dados para prevenir enviar uma tarefa vazia

  return (
    <div className="flex flex-row justify-center gap-[15px] items-center w-full h-[250px]">
        <input onChange={inputChange} className="p-[12px] min-w-[450px] h-[55px] bg-white border-[3px] text-[#333] border-[#333] rounded-[5px]" type="text" placeholder={currentPlaceholder} value={inputValue}/>
        <button className="text-black bg-[#4cff38] hover:bg-[#278419] hover:text-white h-[55px] py-[12px] px-[17px] rounded-[5px] font-semibold border-[3px] border-[#333]">Adicionar</button>
    </div>
  );
}
 
export default TaskForm;