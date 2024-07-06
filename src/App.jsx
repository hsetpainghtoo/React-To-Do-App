// import HPH from "./HPH";

// const App = () => {
//     // const headingStyle = {
//     //     color : "Black",
//     //     backgroundColor : "Gray",
//     //     fontFamily : "Impact",
//     //     padding : "10px"
//     // };
//   return (
//     <div className="border-4 border-gray-600 p-5 m-5">
//       {/* <h1 style={headingStyle}>Hello React</h1> */}
//       <h1 className="font-bold font-serif text-3xl mb-2">Hello React</h1>
//       {/* <HPH/> */}
//       <p className="my-2 text-xl">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed assumenda
//         commodi maxime nam? Similique neque illo saepe pariatur nemo iusto
//         deleniti sapiente exercitationem dolorum repellendus! Deserunt natus
//         accusantium voluptatum reiciendis!
//       </p>
//       <button className="active:scale-95 mt-2 hover:bg-gray-200  border-4 rounded-md border-gray-600 p-1 text-xl">Click me</button>
//       {/* <HPH/> */}
//     </div>
//   );
// };
// export default App;

import React, { useState } from "react";
import Heading from "./Heading";
import ListCreateForm from "./ListCreateForm";
import ListStatus from "./ListStatus";
import ListGroup from "./ListGroup";
import { Toaster } from "react-hot-toast";

const App = () => {
  
  const [tasks,setTask] = useState(
    [
    {
        id:1,
        mission:"Read JS Book",
        isDone:false
    },
    {
        id:2,
        mission:"Watch Anime",
        isDone:false
    },
    {
        id:3,
        mission:"Learn React from Tutorial",
        isDone:false
    },
    {
        id:4,
        mission:"Vc with my mom",
        isDone:false
    }
  ]
);

// console.log(tasks, '.....');

const addTask = (job) => {
  const newTask = {
    id : Date.now(),
    mission: job,
    isDone : false,
  };
  setTask([...tasks,newTask]);
};

const checkTask = (id) => {
  setTask(tasks.map(task=>{
    if(id === task.id){
      task.isDone = !task.isDone;
    }
    return task;
  }));
};

const editTask = (newMission,id) => {
  setTask(tasks.map(task => {
    if(id === task.id){
      task.mission = newMission;
      return task
    }else{
      return task
    }
  }))
}
// console.log(editTask);

const deleteTask = (id) => { //js က remove နည်းနဲ့တူ
  setTask(tasks.filter(task => task.id !== id));
};

  return (
    <div className="w-[400px] mx-auto my-16">
      <Heading text='To Do App'/>      
      <ListCreateForm addTask={addTask}/>
      <ListStatus tasks={tasks}/>
      <ListGroup editTask={editTask} deleteTask={deleteTask} checkTask={checkTask} tasks={tasks}/>      
      <Toaster 
        position="bottom-right"
        reverseOrder={false}
      />
    </div>
  );
};

export default App;
