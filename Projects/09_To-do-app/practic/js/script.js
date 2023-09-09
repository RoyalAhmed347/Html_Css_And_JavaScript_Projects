const inputBox = document.getElementById('inputBox');
const listItems = document.querySelector('.listItems');

inputBox.addEventListener('keyup',function(e){
    if (e.key == 'Enter') {
        addItems(this.value);
        this.value = ''
    }
})


function addItems(value){
    let data = document.createElement('li') 
    data.innerHTML = `${value} <span class="trash">X</span>`;
    listItems.appendChild(data);

    data.addEventListener('click',function(){
        this.classList.toggle('done')
    })

    data.querySelector('.trash').addEventListener('click',function(){
        data.remove()
    })
}
