import React, { useState } from "react";
import toast from "react-hot-toast";

const ListCreateForm = (props) => {

  const [text,setText] = useState("")

  const handleTextInput = (event)=>{
    setText(event.target.value);
  };

  const handleAddBtn = () => {
    if(text !== ""){
      toast.success("List Created Successfully!",{position:"top-center"});
      props.addTask(text);
      setText("");
    }else{
      toast.error("Please fill the input area",{position:"top-center"})
    }
    // console.log(text, '....');
    // console.log(text);

    // toast.success("List Created Successfully!",{position:"top-center"});
    // props.addTask(text);
    // setText("");

    // console.log(text);
  };

  const handleEnter = (event) => {
    if(event.key === "Enter"){      
      if(text !== ""){
        toast.success("List Created Successfully!",{position:"top-center"});
        props.addTask(text);
        setText("");
      }else{
        toast.error("Please fill the input area",{position:"top-center"})
      }
    }
    // console.log(event.key);
    // if(event.key === "Enter"){
    //   toast.success("List Created Successfully!",{position:"top-center"});
    //   props.addTask(text);
    //   setText("");
    // }
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="rounded-lg flex-grow border-gray-500 mt-4 border-2 p-2 mr-1"
        id="textInput"
        value={text} //onChange ကိုမဖြစ်မနေထည့်ပေးရမယ်
        onChange={handleTextInput}
        onKeyUp={handleEnter}        
      />
      <button
        onClick={handleAddBtn}
        className="rounded-lg border-2 border-gray-500 bg-slate-900 active:scale-95 text-white p-2 h-11 mt-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default ListCreateForm;
