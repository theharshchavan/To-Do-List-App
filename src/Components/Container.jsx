import React, { useState } from "react";



const Container = () => {
const [inputValue , setinputValue] = useState("");
const [tasks , settasks] = useState([]);
const [editIndex, setEditIndex] = useState(null);

  const addTask = ()=> {
    if (inputValue.trim() !== '') {
      if (editIndex !== null) {
        // Update the existing task
        const updatedTasks = tasks.map((task, index) =>
          index === editIndex ? inputValue : task
        );
        settasks(updatedTasks);
        setEditIndex(null); // Reset editIndex after updating
      } else {
        // Add a new task
        settasks([...tasks, inputValue]);
      }
      setinputValue(''); // Clear the input field
    }
    
  }

  const editTask = (indexToEdit)=> {
      setinputValue(tasks[indexToEdit]); // Set the input value to the task value
      setEditIndex(indexToEdit); // Track the index of the task being edited
  }

  const deletTask = (indextoremove)=>{
    settasks(tasks.filter((_, index)=> index !== indextoremove))
    
  };


  return (
  <div className="w-screen  flex justify-center p-4 ">
  <div className="w-full md:w-2/3 lg:w-1/2 bg-gray-400/50 px-6 rounded-lg md:px-12 py-6 border-gray-900">
    <h1 className="text-center mb-4 font-semibold text-lg md:text-2xl">TO DO LIST</h1>
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 pb-8 border-b-[1px] border-gray-800/50">
      <input value={inputValue} onChange={(e)=>{
        setinputValue(e.target.value);

      }} id="input" type="text" className="w-full md:w-2/3 h-10 p-4 text-black rounded-lg" placeholder="add task here..." />
      <button onClick={addTask} id="add" className="w-full md:w-24 h-10 rounded-lg shadow-md text-black bg-green-500 border-[2px] border-gray-300/50 hover:bg-green-800 transition-all">{editIndex !== null ? 'Update' : 'Add'}</button>
    </div>


    <div className="flex-col">
      {tasks.map((task, index)=>(
        <div key={index} className="todo font-semibold flex flex-col md:flex-row gap-2 lg:gap-2 justify-between items-center bg-white text-black my-5 px-4 py-4 rounded-lg shadow-md">
        <span className="mb-4 text-center md:mb-0">{task}</span>
        <div className="option flex gap-2">
          <button onClick={()=> editTask(index)} className="w-24 md:w-24 h-10 rounded-lg shadow-md bg-green-500 hover:bg-green-800 transition-all">Edit</button>
          <button onClick={()=> deletTask(index)} className="w-24 md:w-24 h-10 rounded-lg shadow-md bg-red-500 hover:bg-red-800 transition-all">Delete</button>
        </div>
      </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Container;
