let childs=document.getElementsByClassName("childs")
let leftBox=document.querySelector(".div-1")
let rightBox=document.querySelector(".div-2")

for (let element of childs) {
    element.addEventListener("dragstart",(e)=>{
     let selectedBox=e.target;

     rightBox.addEventListener("dragover",(e)=>{
        e.preventDefault();
     });
     leftBox.addEventListener("dragover",(e)=>{
        e.preventDefault();
     });

     rightBox.addEventListener("drop",(e)=>{
        if(selectedBox){
       rightBox.appendChild(selectedBox)
       selectedBox=null;
        } 
     })
     leftBox.addEventListener("drop",(e)=>{
        if(selectedBox){
       leftBox.appendChild(selectedBox)
       selectedBox=null;
        }
     })
  })
}