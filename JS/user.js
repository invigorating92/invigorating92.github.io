const loginForm = document.querySelector(".login-form");
const loninInput = document.querySelector(".lonin-input");
const loninSubmit = document.querySelector(".login-submit");
const hello = document.querySelector(".hello");
const removeBtn = document.querySelector(".removeBtn");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME = "username"

function handleFormSubmit(event){
    event.preventDefault();
    const username = loninInput.value;
    localStorage.setItem(USERNAME, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    helloText(username);
    removeBtn.classList.remove(HIDDEN_CLASSNAME);
}
function helloText(name){
    hello.classList.remove(HIDDEN_CLASSNAME);
        hello.innerHTML = `Hello! ${name}♥`
}


function roadName(){
    const roadName = localStorage.getItem(USERNAME);
    if(roadName === null){
        loginForm.classList.remove(HIDDEN_CLASSNAME);
    }else{
        helloText(roadName);
        removeBtn.classList.remove(HIDDEN_CLASSNAME);
    }
}

function removeName(){
    localStorage.removeItem(USERNAME);
    window.location.reload();
}

function init(){
    roadName();
    loginForm.addEventListener("submit", handleFormSubmit);
    removeBtn.addEventListener("click", removeName);
}
init();