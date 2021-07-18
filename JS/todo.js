const todoInput = document.querySelector(".todoInput"),
    todoForm = document.querySelector(".todoForm");
const todoList = document.querySelector(".todoList"),
    completeList = document.querySelector(".completeList");

let todosArray = [];
let okArray =[];
const TODOS_KEY = "todos";
const TODOSOK_KEY = "todosOk";


function saveValue(){
    localStorage.setItem( TODOS_KEY,JSON.stringify(todosArray))
}

function saveOkValue(){
    localStorage.setItem(TODOSOK_KEY, JSON.stringify(okArray.flat()));
}

function okListNew(todo){
    let arrayFlat = todo.flat()
    const createList = document.createElement("li");
    createList.id = arrayFlat[okArray.length-1].id;
    const listName = document.createElement("span");
    const listDelete = document.createElement("button");
    listName.innerText = arrayFlat[okArray.length-1].text;
    listDelete.innerText = "X";
 
    appendTag(createList, listName);
    appendTag(createList, listDelete);
    appendTag(completeList, createList);

    listDelete.addEventListener("click", completeDeleteBtnNew);
}

function okList(todo){
    const createList = document.createElement("li");
    createList.id = todo.id;
    const listName = document.createElement("span");
    const listDelete = document.createElement("button");
    listName.innerText = todo.text;
    listDelete.innerText = "X";
 
    appendTag(createList, listName);
    appendTag(createList, listDelete);
    appendTag(completeList, createList);

    listDelete.addEventListener("click", completeDeleteBtn);
}

function okBtn(event){
    const li= event.target.parentNode;
    okArray.push(todosArray.filter((todo) => todo.id === parseInt(li.id)));
    
    todosArray = todosArray.filter((todo) => todo.id !== parseInt(li.id));
    saveOkValue();
    saveValue();
    li.remove();
    okListNew(okArray);
    // console.log(okArray.flat());
    // console.log(okList(okArray);
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
function completeDeleteBtnNew(event){
    const li= event.target.parentNode;
    okArray = okArray.flat().filter((todo)=> todo.id !== parseInt(li.id));
    // console.log(todo.id);
    console.log(li.id);
    li.remove();
    saveOkValue();
}

function completeDeleteBtn(event){
    const li= event.target.parentNode;
    okArray = okArray.filter((todo)=> todo.id !== parseInt(li.id));
    // console.log(todo.id);
    console.log(li.id);
    li.remove();
    saveOkValue();
}


function newList(todo){
    const createList = document.createElement("li");
    createList.id = todo.id;
    const listName = document.createElement("span");
    const listDelete = document.createElement("button");
    const listOk = document.createElement("button");
    listName.innerHTML = todo.text;
    listDelete.innerHTML = "X";
    listOk.innerHTML ="OK"
 
    appendTag(createList, listName);
    appendTag(createList, listDelete);
    appendTag(createList, listOk);
    appendTag(todoList, createList);

    listDelete.addEventListener("click", deleteBtn);
    listOk.addEventListener("click", okBtn);

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
   console.log(todosArray);
   
}

todoForm.addEventListener("submit", handleSubmit);

const loadList = localStorage.getItem(TODOS_KEY);
const loadOkList = localStorage.getItem(TODOSOK_KEY);

if(loadList !== null){
    const parsedLoadList = JSON.parse(loadList);
    todosArray = parsedLoadList;
    todosArray.forEach(newList);
}
console.log(loadList);

if(loadOkList !== null){
    const parsedLoadOkList = JSON.parse(loadOkList);
    okArray = parsedLoadOkList;
    okArray.forEach(okList);
}
