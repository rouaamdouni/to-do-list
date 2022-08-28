let listeHTML = document.querySelector("ul");
let addButton = document.querySelector("button");
let inputTodo = document.querySelector("input");
// kif nenzel al button ykharali alert ("rak nzelt")
inputTodo.classList.add("task-add")
addButton.classList.add("add-button")
//let elementnumber=0
/*let number=document.createElement("h1")
listeHTML.append(number)
number.innerText=` total des tasks = ${elementnumber}`*/
addButton.onclick = () => {
    let li = document.createElement("li");
    let newinput=document.createElement("input")
    newinput.type="text"
    newinput.classList.add("input-style")
    newinput.value= inputTodo.value;
    let check = document.createElement("input")
    check.type = "checkbox"
    check.classList.add("check-task")
    li.append(check);
    li.append(newinput);
    
    if(newinput.value.length!=0){
        listeHTML.appendChild(li)
        inputTodo.value=""
        let savebutton = document.createElement("button")
        savebutton.innerText="modify"
        li.append(savebutton);
        let deletebutton = document.createElement("button")
        deletebutton.innerText="delete"
        li.append(deletebutton);
        
       
        deletebutton.onclick = () => {
            listeHTML.removeChild(li)
        }
        savebutton.onclick = () => {
            let newtask=newinput.value
            console.log(newtask)
            
        }
        check.onclick=()=>{
            newinput.classList.add("task")
        }
       
        
        
    }else{
        let errortitle=document.createElement("h1")
        errortitle.innerText="please provide your task"
        listeHTML.append(errortitle)
    }
    
  
 
};

        




  
  