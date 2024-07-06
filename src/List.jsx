import React, { useState } from "react";
import toast from "react-hot-toast";
import Swal from 'sweetalert2';

const List = (props) => {

  const [isEdit, setIsEdit] = useState(false);
  const [newMission,setNewMission] = useState(props.mission);
  // console.log(props, '*******', newMission,props.id);

  const handleNewMissionInput = (event) => {
    setNewMission(event.target.value);
  } 
   const handleNewMissionInputUpdate = (event) => {
     // console.log(event.key);
     if(event.key === "Enter"){
       //  console.log("Update");
       props.editTask(newMission,props.id);      
       setIsEdit(false);
     }
   };

  const handleCheckBox = () => {
    props.checkTask(props.id);
  };

  const handleDelBtn = () => {
    // if (confirm("Are You Sure Want To Delete?")) {
    //   props.deleteTask(props.id);
    // }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        props.deleteTask(props.id);
        toast.success("List deleted successfully!");
      }
    });
  };

  const handleEditBtn = () => {
    setIsEdit(true);
  };

  

  return (
    <div className="list group animate__animated animate__fadeInDown">
      <div
        className={`flex mb-3 duration-200 border border-gray-600  rounded-lg justify-between px-2 group overflow-hidden 
         ${
           props.isDone
            ? "pointer-events-none bg-blue-300 opacity-40 scale-95" 
            : ""
         }`}
      >
        <div className="content flex p-3 gap-3">
          <input
            type="checkbox"
            className="list-check"
            checked={props.isDone}
            onChange={handleCheckBox}
            disabled={isEdit}
          />
          {isEdit ? (
            <input type="text" 
            className="border border-stone-400 text-sm" 
            value={newMission}
            onChange={handleNewMissionInput}
            onKeyUp={handleNewMissionInputUpdate}
            />
          ) : (
            <p
              className={`list-text font-semibold ${
                props.isDone && "line-through"
              }`}
            >
              {props.mission}
            </p>
          )}
        </div>
        <div className="control flex gap-2 pointer-events-none   group-hover:pointer-events-auto ">
          <button
            onClick={handleEditBtn}
            className={`list-edit opacity-0 group-hover:opacity-100 -translate-x-[20px] group-hover:translate-x-0 duration-300 ${props.isDone && "pointer-events-none hidden"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>

          <button
            onClick={handleDelBtn}
            className="list-delete opacity-0 group-hover:opacity-100 translate-x-[20px] group-hover:translate-x-0 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
