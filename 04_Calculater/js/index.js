const input = document.getElementById('inputBox');
const buttonBtn = document.querySelectorAll('button')

let string = '';
let arr = Array.from(buttonBtn);

arr.forEach(buttonBtn => {
    buttonBtn.addEventListener('click',function(e){
        if (e.target.innerHTML = '=') {
            string = eval(string)
            input.value = string;
        }
         else {
            string += e.target.innerHTML;
            input.value = string;

        }
    })
})