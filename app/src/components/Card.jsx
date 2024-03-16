import { useState } from "react";


const Cards = ({props}, removeCardTask, utualizaCardTask) => { // ! ERROR: 'removeCardTask' has already been declared. (4:24)  7 |   const {task, id} = props // desconstruindo array
  
  // ! Depois de fazer oq citei ali em cima, teste para saber se já está te concedendo acesso às funções, se não, desconstrua q nem feito abaixo
  const {task, id} = props // desconstruindo array
  
  const [title, setTitle] = useState(task)
  const [blur, setBlur] = useState(true)
  const [hoverDeleteBtn, setHoverDeleteBtn] = useState(false)
  const [removeCardTask, setRemoveCardTask] = useState(id)


  function deleteTask() { 
    console.log('Botão Pressionado', id)
    console.log(props)
    setRemoveCardTask(removeCardTask)

  }



  function updateTask() { 
    console.log('Botão Pressionado', id)
    // ! A estrutura de um useState é:
    // ! const [ nomeDaVariável, funçãoQueAlteraVariável ] = useState(valorInicialDaVariável)
    // ! E sim, é estranho não considerar uma função
    utualiza_Card_Task(id) // ERROR removeTask is not a function ??
  }

  function changeTitle(e) {
    setTitle(e.target.value)
  }

  function toggleBlur() {
    setBlur(oldValue => !oldValue)
  }

  function addStrikeThrought() {
    setHoverDeleteBtn(true)
  }

  function removeStrikeThrought() {
    setHoverDeleteBtn(false)
  }


  function call_Update_Functions() {
    toggleBlur()
    updateTask()
    
  }

  // TODO: Trazer função clickButton dos <Card /> para <CardsGroup />
  // TODO: Acessar função de deletar tarefa e alterar tarefa (enviando o id referente do card interagido)
  
  return (
    <div className="flex flex-row bg-[#777] w-[550px] h-[100px] rounded-[5px] justify-between overflow-hidden border-[3px] border-[#333]">
      <input disabled={blur} type="text" className={`grow mx-[15px] pl-[15px] my-auto py-[10px] text-2xl font-semibold text-white disabled:bg-transparent rounded-[5px] truncate ${hoverDeleteBtn ? 'line-through text-green-500 animate-bounce' : ''}`} value={title} onChange={changeTitle} onBlur={toggleBlur} />
      <div className="flex flex-col border-l-[3px] border-[#333]">
        <button onClick={deleteTask} value={removeCardTask} onMouseOver={addStrikeThrought} onMouseLeave={removeStrikeThrought} className="w-[52px] h-[50%] bg-[#4cff38] cursor-pointer border-b-[1.5px] border-[#333] hover:bg-[#278419]">✅</button>
        <button onClick={call_Update_Functions} className="w-[52px] h-[50%] bg-[#ffe53b] cursor-pointer border-t-[1.5px] border-[#333] hover:bg-[#a89726]">🔄</button>
      </div>
    </div>
  );
}

export default Cards;