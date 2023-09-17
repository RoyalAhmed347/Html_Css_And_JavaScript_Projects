let addNoteBtn = document.getElementById('addNote');

let main = document.getElementById('main');


const saveNotes = () =>{
    const notes = document.querySelectorAll('.note textarea');

    const data = [];
    notes.forEach((note)=>{
        data.push(note.value);
    })
    if (data.length == 0) {
        localStorage.removeItem("notes")
    } else {
    localStorage.setItem("notes", JSON.stringify(data))
        
    }
}


let addNote = (noteData = "") => {
    let note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `<div class="tool">
    <p class="name" contenteditable="true">Your Notes</p>
    <div>
    <i class="save fas fa-save"></i>
    <i class="trash fas fa-trash"></i>
    </div>
    </div>
    <textarea placeholder="Enter something">${noteData}</textarea>`;

    main.appendChild(note);

    note.querySelector('.trash').addEventListener('click',()=>{
        note.remove();
        saveNotes();
    })

    note.querySelector('.save').addEventListener('click',()=>{
        saveNotes();
    })
    note.querySelector('textarea').addEventListener('focusout',()=>{
    saveNotes();
    })
}

addNoteBtn.addEventListener('click', () => {
    addNote();
    saveNotes();
})


const notesLoad = () => {
    const lsnotes = JSON.parse(localStorage.getItem("notes"))

   

    if (lsnotes == null) {
        addNote();
        
    } else{
        lsnotes.forEach((note)=>{
            addNote(note);
        })
    }
}

notesLoad();
