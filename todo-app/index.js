const form = document.querySelector('#form');
const textInput = document.querySelector('#text-input');
const listGroup = document.querySelector('.list-group');
const listGroupItem = document.querySelector('.list-group-item');

const error = document.querySelector('.error');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

console.log(notes);

// addEventListeners
const addEventListeners = () => {
    //
}
//toggle completed 
const toggleCompleted = (note, p) => {
    console.log(note);
    if (note.isCompleted == false) {
        note.isCompleted = true;
        p.classList.add('completed');
    } else if (note.isCompleted == true) {
        note.isCompleted = false;
        p.classList.remove('completed');
    }
    localStorage.setItem('notes', JSON.stringify(notes));
}

//delete note 
const deleteNote = (e, id) => {
    //console.log(e, id);
    let el = e.target;
    if (el.classList.contains('close')) {
        el.parentElement.classList.add('fade-out');
        el.addEventListener('transitionend', () => {
            el.parentElement.remove();
        })
    }
    notes.splice(id, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
}

// create notes 
const createNotes = (note, id) => {
    //console.log(note);
    let li = document.createElement('li');
    let label = document.createElement('label');
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = note.isCompleted ? "checked" : "";
    let div = document.createElement('div');
    let p = document.createElement('p');
    let i = document.createElement('i');

    li.setAttribute('class', 'list-group-item');
    label.setAttribute('class', 'custom-checkbox');
    input.setAttribute('class', 'checkbox');
    div.setAttribute('class', 'checkbox_box');
    i.setAttribute('class', 'fas fa-times close');

    p.innerText = note.name;
    note.isCompleted ? p.classList.add('completed') : p.classList.remove('completed');

    label.appendChild(input);
    label.appendChild(div);
    li.appendChild(label);
    li.appendChild(p);
    li.appendChild(i);

    listGroup.appendChild(li);

    //delete book 
    i.addEventListener('click', (e) => {
        deleteNote(e, id);
    });
    // toggle completed 
    input.addEventListener('change', (e) => {
        toggleCompleted(note, p);
    })
    // drag n drop 
    addEventListeners();
}

const displayNotes = () => {
    notes.forEach((note, index) => {
        //console.log(note);
        createNotes(note, index);
    })
}

//set notes 
const setNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

//add note 
const addNote = (e) => {
    e.preventDefault();
    let userInput = textInput.value;
    if (userInput === '') {
        error.style.display = 'block';
        setTimeout(() => {
            error.style.display = 'none';
        }, 1000)
    } else {
        let note = {
            name: userInput,
            isCompleted: false
        }
        notes = [...notes, note];
        //set to ls 
        setNotes();
        createNotes(note);
        textInput.value = '';
    }
}

form.addEventListener('submit', addNote);
document.addEventListener('DOMContentLoaded', displayNotes);
