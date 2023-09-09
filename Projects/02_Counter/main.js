const valueBox = document.getElementById('value'); 
const decresbtn = document.querySelector('.decres'); 
const resetbtn = document.querySelector('.reset'); 
const increasbtn = document.querySelector('.increas'); 


let valueShow = 0;

increasbtn.addEventListener('click',function(){
    valueShow++
    shoeInBox()
})
decresbtn.addEventListener('click',function(){
    valueShow--
    shoeInBox()
})
resetbtn.addEventListener('click',function(){
    valueShow = 0
    shoeInBox()
})


function shoeInBox(){
    valueBox.innerHTML = valueShow;
}