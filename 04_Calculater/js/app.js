let innput = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');

let string = '';
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click',function(e){
        if (e.target.innerHTML == '=') {
            string = eval(string);
            showInput()

        } 
        else if (e.target.innerHTML == 'AC') {
            string = '';
            showInput()

        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substr(0, string.length - 1);
            showInput()

        } else {
            string += e.target.innerHTML;
            showInput()


        } 
    })
})


function showInput() {
    innput.value= string;
}