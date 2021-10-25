const input = document.querySelector('.todo-input') 
const formbutton = document.querySelector('.todo-button')
const unordered = document.querySelector('ul')
const inp = document.querySelector('input')  
var count = 1
//filter buttons 
const all = document.querySelector('.all-btn')  
const completebtn = document.querySelector('.completed-btn')  
const pending  = document.querySelector('.pending-btn')  
const clear = document.querySelector('.clear-todo')   
const itemsbuton = document.querySelector('.item-todo')  
//darkmode button
var button = document.querySelector('.toggle-btn')  
var body = document.querySelector('body')  
var fil = document.querySelector('.filter')
document.addEventListener('DOMContentLoaded', gettodos())

//childnode 
const child = unordered.childNodes
// input button  
formbutton.addEventListener('click', (event)=>{  
   event.preventDefault()
 const tododiv = document.createElement('div') 
 tododiv.classList.add('todo') 
 const element = document.createElement('li') 
 element.innerText = inp.value
 element.classList.add('item-list') 
 tododiv.appendChild(element) 
 //add the values to local storage 
 savelocaltodo(inp.value)
//  creatiing buttons 
const completedbutton = document.createElement('button') 
completedbutton.innerHTML = '<i class=" fas fa-check"></i>' 
completedbutton.classList.add('complete-btn') 
tododiv.appendChild(completedbutton)  

const deletedbutton = document.createElement('button') 
deletedbutton.innerHTML = '<i class=" fas fa-trash"></i>' 
deletedbutton.classList.add('delete-btn') 
tododiv.appendChild(deletedbutton)   

unordered.appendChild(tododiv) 
var itemsdel = unordered.childNodes.length 
itemsbuton.innerHTML = +itemsdel - 1+" items"

 //clearing input 
inp.value = ""
})
//check and delete functions button 
 unordered.addEventListener('click', (e)=>{ 
    const item = e.target   
    
    // deleting the event      
    if(item.classList[0] === 'delete-btn') 
    {    
    const del = item.parentElement  
     removelocalstorage(del)
    del.remove()  
    
     itemsdel = unordered.childNodes.length 
    itemsbuton.innerHTML = +itemsdel - 1+" items"
    }  
    //checking the event 
    if(item.classList[0] === 'complete-btn') 
     {  
        const com = item.parentElement 
        com.classList.toggle('completed') 
     }   

})   


all.addEventListener('click', (e)=>
{    
   for(var i = 1; i<= unordered.childNodes.length-1;i++) 
   {
      const allbut = unordered.childNodes[i]
       allbut.style.display = "flex"
   }

}) 

completebtn.addEventListener('click', (e)=>
{ 
for(var i = 1; i<= unordered.childNodes.length-1;i++) 
{
 const allbut = unordered.childNodes[i]  
if(allbut.classList.contains('completed')){  
    allbut.style.display = 'flex' 
} 
else{
   allbut.style.display = 'none'
}}
})

pending.addEventListener('click', (e)=>
{ 
for(var i = 1; i<= unordered.childNodes.length-1;i++) 
{
 const allbut = unordered.childNodes[i]  
if(!allbut.classList.contains('completed')){  
    allbut.style.display = 'flex' 
} 
else{
   allbut.style.display = 'none'
}}
})  
clear.addEventListener('click', ()=>{
 unordered.innerHTML = ""  

})
//dark mode
button.addEventListener("click", ()=>{
   body.classList.toggle('dark')  
   fil.classList.toggle('dark')
  all.classList.toggle('dark') 
  pending.classList.toggle('dark')  
  completebtn.classList.toggle('dark') 
  clear.classList.toggle('dark')
  
}) 
 
// local storage 
function savelocaltodo(todo){
   //checking if already there is a storage 
   let todos 
   if(localStorage.getItem('todos') === null) 
   {
      todos = []
   }else{
      todos = JSON.parse(localStorage.getItem('todos'))
   } 
   todos.push(todo);  
   localStorage.setItem("todos", JSON.stringify(todos))

} 
function gettodos(){ 
   let todos
   if(localStorage.getItem('todos') === null) 
   {
      todos = []
   }else{
      todos = JSON.parse(localStorage.getItem('todos'))
   }   
   todos.forEach( function (todo) {  
      const tododiv = document.createElement('div') 
 tododiv.classList.add('todo') 
 const element = document.createElement('li') 
 element.innerText = todo
 element.classList.add('item-list') 
 tododiv.appendChild(element) 
 
//  creatiing buttons 
const completedbutton = document.createElement('button') 
completedbutton.innerHTML = '<i class=" fas fa-check"></i>' 
completedbutton.classList.add('complete-btn') 
tododiv.appendChild(completedbutton)  

const deletedbutton = document.createElement('button') 
deletedbutton.innerHTML = '<i class=" fas fa-trash"></i>' 
deletedbutton.classList.add('delete-btn') 
tododiv.appendChild(deletedbutton)   

unordered.appendChild(tododiv) 


})    
} 
function removelocalstorage(todo){
   let todos
   if(localStorage.getItem('todos') === null) 
   {
      todos = []
   }else{
      todos = JSON.parse(localStorage.getItem("todos"))
   }   
   const todoindexof = todo.childNodes[0].innerText  
   console.log(todos.splice(todos.indexOf(todoindexof), 1)) 
   localStorage.setItem("todos", JSON.stringify(todos))
} 



