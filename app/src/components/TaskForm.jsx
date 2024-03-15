const TaskForm = () => {
  return (
    <div className="flex flex-row justify-center gap-[15px] items-center w-full h-[250px]">
        <input className="p-[12px] min-w-[450px] h-[55px] bg-white border-[3px] text-[#333] border-[#333] rounded-[5px]" type="text" placeholder="Preciso tirar o lixo..."/>
        <button className="text-black bg-[#4cff38] hover:bg-[#278419] hover:text-white h-[55px] py-[12px] px-[17px] rounded-[5px] font-semibold border-[3px] border-[#333]">Adicionar</button>
    </div>
  );
}
 
export default TaskForm;