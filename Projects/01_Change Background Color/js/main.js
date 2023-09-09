const color = ['red','green','yellow','hotpink','#000080','#ee82ee','#7fff4d','white','#00ffff']

const colorName = document.getElementById('colorName');
const colorName1 = document.getElementById('colorName1');

const box = document.getElementById('box');
const btn = document.getElementById('btn');



btn.addEventListener('click',function(){
let randomNumber = Math.floor(Math.random() * color.length);
    box.style.backgroundColor = color[randomNumber];
    colorName.innerHTML = color[randomNumber];
    colorName1.innerHTML = color[randomNumber];
})