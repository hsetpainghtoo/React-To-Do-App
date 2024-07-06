import React from "react";
import EmptyList from "./EmptyList";
import List from "./List";

const ListGroup = (props) => {
  return (
    <div id="listGroup" className="my-7">
      <EmptyList />
      {/* <List mission='To read JS Book' isDone={false}/>   
        <List mission='To Watch Anime' isDone={true}/>   
        <List mission='To Code' isDone={true}/>    */}

      {props.tasks.map((task) => (
        <List
          checkTask={props.checkTask}
          deleteTask={props.deleteTask}
          editTask={props.editTask}
          id={task?.id} //id သာမပေးထားရင်ဘယ်ကလာတဲ့ဟာလည်းသိမှာမဟုတ်
          key={task?.id}
          mission={task?.mission}
          isDone={task?.isDone}
        />        
      ))}
         
    </div>
  );
};

// {tasks.map((task)=>(
//     <div className={`${
//         task.isDone && "opacity-30 scale-90"
//         } border border-gray-400 p-3 m-2 rounded-lg bg-gray-300`}
//         key={task.id}>   {/* မတူညီတဲ့တန်ဖိုးတွေပါတာကိုထည့်ရမှာမို့ idကိုထည့်လိုက်တာ */}
//         <p>{task.id} / {task.isDone ? "Done" : "Not yet"}</p> {/* isDone က Boolean မို့လို့ UIမှာပေါ်အောင် Conditionတစ်ခုထည့်ပေးလိုက်တာ */}
//         <p>{task.mission}</p>
//     </div>
// ))}

export default ListGroup;
