let addNoteBtn = document.getElementById('addNote');

let main = document.getElementById('main');


addNoteBtn.addEventListener('click', function () {
    addNote();
})


let addNote = () => {
    let note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `<div class="tool">
    <i class="save fas fa-save"></i>
    <i class="trash fas fa-trash"></i>
    </div>
    <textarea name="" id="" ></textarea>`;

    main.appendChild(note);

    note.querySelector('.trash').addEventListener('click',function(){
        note.remove();
    })
}