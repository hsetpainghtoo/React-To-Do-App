const app = document.querySelector("#app");
//To Do UI
// const heading = document.createElement("h1");
// heading.innerText = "To Do App";
// app.append(heading);

// const inputBox = document.createElement("input");
// app.append(inputBox);

// const addBtn = document.createElement("button")
// addBtn.innerText = "Add Btn";
// app.append(addBtn);

// const list = document.createElement("ul");
// app.append(list);

// const list1 = document.createElement("li");
// list1.innerText = "Read JS Book";
// app.append(list1);

// const list2 = document.createElement("li");
// list2.innerText = "Sleep Early";
// app.append(list2);

// const list3 = document.createElement("li");
// list3.innerText = "Watch Anime";
// app.append(list3);


// const tasks = ["Read JS Book","Sleep Early","Watch Anime","Stay strong"];

// const createHeading = (text)=>{
//     const heading = document.createElement("h1");
//     heading.innerText = text;
//     return heading;
// } 

// const createForm = () =>{
//     const createForm = document.createElement("form");
//     const inputBox = document.createElement("input");
//     const addBtn = document.createElement("button")
//     addBtn.innerText = "Add Btn";
//     app.append(inputBox);
//     app.append(addBtn);
//     return createForm;
// }

// const listGroup = ()=>{
//     const lists = document.createElement("ul")
//     lists.setAttribute("id","listGroup");
//     return lists;
// }

// const createList = (text)=>{
//     const list = document.createElement("li");
//     list.innerText = text;
//     return list;
// }

// const renderList = (lists)=>{
//     const listGroup = app.querySelector("#listGroup");
//     listGroup.innerHTML = "";
//     lists.forEach((list) => listGroup.append(createList(list)));
// }

// (function(){
//     app.append(createHeading("To Do App"));
//     app.append(createForm());
//     app.append(listGroup());
//     renderList(tasks);
// })();


//OOP
class ToDo{
    constructor(){
        this.tasks =  ["Read JS Book","Sleep Early","Watch Anime","Stay strong"];
    }

     createHeading(text){
            const heading = document.createElement("h1");
            heading.innerText = text;
            return heading;
        } 
        
         createForm() {
            const createForm = document.createElement("form");
            const inputBox = document.createElement("input");
            const addBtn = document.createElement("button")
            addBtn.innerText = "Add Btn";
            app.append(inputBox);
            app.append(addBtn);
            return createForm;
        }
        
         listGroup(){
            const lists = document.createElement("ul")
            lists.setAttribute("id","listGroup");
            return lists;
        }
        
         createList(text){
            const list = document.createElement("li");
            list.innerText = text;
            return list;
        }
        
         renderList(lists){
            const listGroup = app.querySelector("#listGroup");
            listGroup.innerHTML = "";
            lists.forEach((list) => listGroup.append(this.createList(list)));
        }

        render (){
            app.append(this.createHeading("To Do App"));
            app.append(this.createForm());
            app.append(this.listGroup());
            this.renderList(this.tasks);
        }
}

const todo = new ToDo;
todo.render()
