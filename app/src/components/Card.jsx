const Cards = ({props, removeTask}) => {
  
  const {task, id} = props // desconstruindo array


  function deleteTask() { 
    // Function DELETE task
    console.log('Deleção Acionada', id)

    console.log(removeTask(id))
    
    removeTask(id)

  }

  function updateTask() { 
    // Function UPDATE task
    console.log('Atualização Acionada', id)

    utualizaTask(id) //  utualizaTask is not defined ??

  }
  
  return (
    <div className="flex flex-row bg-[#777] w-[550px] h-[100px] rounded-[5px] justify-between overflow-hidden border-[3px] border-[#333]">
      <h2 className="grow ml-[30px] my-auto text-2xl font-semibold text-white">{task}</h2>
      <div className="flex flex-col border-l-[3px] border-[#333]">
        <button onClick={() => deleteTask()} className="w-[52px] h-[50%] bg-[#4cff38] cursor-pointer border-b-[1.5px] border-[#333] hover:bg-[#278419]">✅</button>
        <button onClick={() => updateTask()} className="w-[52px] h-[50%] bg-[#ffe53b] cursor-pointer border-t-[1.5px] border-[#333] hover:bg-[#a89726]">🔄</button>
      </div>
    </div>
  );
}

export default Cards;