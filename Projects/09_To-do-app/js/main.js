let inputBox = document.getElementById('inputBox');
let toDoItmesBox = document.getElementById('todoItemsBox');

inputBox.addEventListener('keyup',function(e){
    if (e.key == 'Enter') {
        creatToDoItem(this.value);
        this.value = '';
    }
})

function creatToDoItem(item) {
    let newItem = document.createElement('li');

    newItem.innerHTML = `${item}  
    <i class="fa-solid fa-trash"></i>`;
    toDoItmesBox.appendChild(newItem);


    newItem.addEventListener('click',function(){
        this.classList.toggle('done')

    })

    newItem.querySelector('i').addEventListener('click',function(){
        newItem.remove();
    })
}