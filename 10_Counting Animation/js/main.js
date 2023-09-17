let vals = document.querySelectorAll('.val')
let duration = 4000;
vals.forEach((val)=>{
    let satrtVal = 0;
    let endVal = val.getAttribute('data-value');
    let interval = Math.floor(duration / endVal);

    let increment = setInterval(() => {
         satrtVal++;
        val.textContent = satrtVal;
        if (satrtVal == endVal) {
            clearInterval(increment);
        }
    }, interval);   
    
    
    
})