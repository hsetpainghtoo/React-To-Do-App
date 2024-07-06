import "./style.css";
// import { createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import HPH from "./HPH";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);//ReactDom Root
root.render(<App/>);//react node
// root.render(App());
// root.render(HPH());
// root.render(<HPH/>)

// const tasks = ["Read JS Book","Sleep Well","Watch Anime","Stay Strong","Exercise"];
// tasks.forEach((el)=>console.log(el));
// const x = tasks.forEach((el)=>console.log(el));
// console.log(x); // we don't use forEach in React 'cause it returns undefined

// const root = createRoot(rootElement); // need dom which directly connect to html file
// root.render(
//   createElement(
//     "div",
//     null,
//     createElement("h1",null,"To Do App"
//     ),
//     createElement(
//         "form",
//         null,
//         createElement("input",null,null),
//         createElement("button",null,"Add Btn")
//     ),
//     createElement(
//         "ul",
//         null,
//         // createElement("li",null,"Read JS Book"),
//         // createElement("li",null,"Sleep Well"),
//         // createElement("li",null,"Watch Anime")
//         // tasks.map((task)=>createElement("li",null,task)) //map for looping instead of forEach
//         tasks.map((task,index)=>createElement(
//             "li",
//             {key:index ,className:"list",title:"Hello"},
//             task)) //map for looping instead of forEach
//     )
//   )
// );
