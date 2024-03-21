import { useState } from "react";

const Cards = ({props}) => { 
  const {task, id, removeTask, updateTask} = props // desconstruindo array
  
  const [title, setTitle] = useState(task)
  const [blur, setBlur] = useState(true)
  const [hoverDeleteBtn, setHoverDeleteBtn] = useState(false)


  function deleteTask() { 
    removeTask(id)
  }

  function atualizaTask(i) { 
    toggleBlur()
    if(!blur) {
      let tasktitle = i.target.value
      updateTask(id, tasktitle)
    }
  }

  function changeTitle(e) {
    setTitle(e.target.value)
  }

  function onEnterKeyDown(e) {
    if(e.key == 'Enter') atualizaTask()
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


  // *: Acessar função de deletar tarefa e alterar tarefa (enviando o id referente do card interagido)
  
  return (
    <div className="flex flex-row bg-[#777] w-[550px] h-[100px] rounded-[5px] justify-between overflow-hidden border-[3px] border-[#333]">
      <input disabled={blur} type="text" className={`grow mx-[15px] pl-[15px] my-auto py-[10px] text-2xl font-semibold text-white disabled:bg-transparent rounded-[5px] truncate ${hoverDeleteBtn ? 'line-through text-green-500 animate-bounce' : ''}`} value={title} onChange={changeTitle} onKeyDown={onEnterKeyDown} onBlur={atualizaTask} />
      <div className="flex flex-col border-l-[3px] border-[#333]">
        <button onClick={deleteTask} onMouseOver={addStrikeThrought} onMouseLeave={removeStrikeThrought} className="w-[52px] h-[50%] bg-[#4cff38] cursor-pointer border-b-[1.5px] border-[#333] hover:bg-[#278419]">✅</button>
        <button onClick={atualizaTask} className="w-[52px] h-[50%] bg-[#ffe53b] cursor-pointer border-t-[1.5px] border-[#333] hover:bg-[#a89726]">🔄</button>
      </div>
    </div>
  );
}

export default Cards;