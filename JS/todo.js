const todoInput = document.querySelector(".todoInput"),
    todoForm = document.querySelector(".todoForm");
const todoList = document.querySelector(".todoList"),
    completeList = document.querySelector(".completeList");

let todosArray = [];
const TODOS_KEY = "todos";

function saveValue(){
    localStorage.setItem( TODOS_KEY,JSON.stringify(todosArray))
}

function deleteBtn(event){
    const li= event.target.parentNode;
    todosArray = todosArray.filter((todo) => todo.id !== parseInt(li.id));
    saveValue();
    li.remove();
}

function appendTag(aaa, bbb){
    aaa.appendChild(bbb);
}

function newList(todo){
    const createList = document.createElement("li");
    createList.id = todo.id;
    const listName = document.createElement("span");
    const listDelete = document.createElement("button");
    const listMove = document.createElement("button");
    listName.innerHTML = todo.text;
    listDelete.innerHTML = "X";
    listMove.innerHTML ="↓"
 
    appendTag(createList, listName);
    appendTag(createList, listDelete);
    appendTag(createList, listMove);
    appendTag(todoList, createList);

    listDelete.addEventListener("click", deleteBtn);

}

function handleSubmit(event){
    event.preventDefault();
    const todoInputValue = todoInput.value;
   
   const todoObj ={
       text : todoInputValue,
       id : Date.now()
   }
   newList(todoObj);
   todosArray.push(todoObj);
    saveValue();
   todoInput.value="";
   
}

todoForm.addEventListener("submit", handleSubmit);

const loadList = localStorage.getItem(TODOS_KEY);

if(loadList !== null){
    const parsedLoadList = JSON.parse(loadList);
    todosArray = parsedLoadList;
    todosArray.forEach(newList);
}
console.log(loadList);
