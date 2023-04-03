console.log("Welcome to my site!");

//FASE 4 (*Elemento temporal*)
let  tag = document.getElementById("tag"); 
let count = 0;
const counter = () => {
    count++;
    tag.innerHTML = count;
}