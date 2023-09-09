let colors = ['green','red','rgba(133,122,200)','#f15025','blue'];
let btn = document.getElementById('btn');
let color = document.querySelector('.color');
let box = document.getElementById('box');

btn.addEventListener('click',function(){
    let randomNum = getrendomcolor();
    box.style.backgroundColor = colors[randomNum];
    color.innerHTML = colors[randomNum];
})


function getrendomcolor() {
    return Math.floor(Math.random() * colors.length);
}
