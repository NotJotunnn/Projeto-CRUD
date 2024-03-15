const Cards = ({props}) => {
  
  const {task, id} = props // desconstruindo array


  function clickButton() { 

    // Function DELETE task

    console.log('Botão Pressionado', id)
    
  }
  
  return (
    <div className="flex flex-row bg-[#777] w-[550px] h-[100px] rounded-[5px] justify-between overflow-hidden border-[3px] border-[#333]">
      <h2 className="grow ml-[30px] my-auto text-2xl font-semibold text-white">{task}</h2>
      <div className="flex flex-col border-l-[3px] border-[#333]">
        <button onClick={ () => clickButton()} className="w-[52px] h-[50%] bg-[#4cff38] cursor-pointer border-b-[1.5px] border-[#333] hover:bg-[#278419]">✅</button>
        <button className="w-[52px] h-[50%] bg-[#ffe53b] cursor-pointer border-t-[1.5px] border-[#333] hover:bg-[#a89726]">🔄</button>
      </div>
    </div>
  );
}

export default Cards;