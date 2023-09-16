const img = document.getElementById('img');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn)=>{
    btn.addEventListener('click',(detals)=>{
        if (detals.target.value == 'on') {
            img.src = 'img/bulb-on.png';
        } else {
            img.src = 'img/bulb-off.png';
            
        }
    })
})