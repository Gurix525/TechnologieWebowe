const todoButton = document.getElementById("todoButton");
const todoUl = document.getElementById("todoUl");
var id=0;
function addItem(){
    
    let todoValue = document.getElementById("todoValue")

    if(todoValue.value !==  ""){
        id++;
        let todoLi = document.createElement("LI");
        let todoDeleteButton = `
         <button id="delete${id}" >DELETE</button> 
        `
        let todoEditButton = `
         <button id="edit${id}" >EDIT</button> 
        `
        todoLi.innerHTML=`<span>${todoValue.value}</span>${todoEditButton}${todoDeleteButton} `
        todoUl.appendChild(todoLi);

        todoValue.value = '';
        todoValue.placeholder =''

        var todoDeleteItem = document.getElementById(`delete${id}`);
        todoDeleteItem.addEventListener("click", deleteItem);
        
        var todoEditItem = document.getElementById(`edit${id}`);
        todoEditItem.addEventListener("click", editItem);
    }
    else{
        todoValue.placeholder = "Type text here..";
    }

}


function deleteItem(e){
    e.target.parentElement.remove();
}

function editItem(e){

    let todoValue = document.getElementById("todoValue")

    if(todoValue.value !==  ""){
        e.target.parentElement.firstChild.innerText = todoValue.value;
    }
    else{
        todoValue.placeholder = "TEXT TO EDIT HERE";
    }
}


todoButton.addEventListener("click",addItem)