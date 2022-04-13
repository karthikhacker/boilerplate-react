const form = document.querySelector('#form');
const inputText = document.querySelector('#input-text');
const listGroup = document.querySelector('.list-group');
const filters = document.querySelectorAll('.filters');
const todoCount = document.querySelector('#todo-count');
const all = document.querySelector('.all');
const active = document.querySelector('.active-todo');
const completed = document.querySelector('.completed');

let todos = [
    {
        name: 'Buy milk',
        completed: false,
        createAt: Date.now()
    },
    {
        name: 'Buy ice cream',
        completed: true,
        createAt: Date.now()
    }, {
        name: 'Pack your bag',
        completed: false,
        createAt: Date.now()
    }, {
        name: 'Do yoga',
        completed: true,
        createAt: Date.now()
    }, {
        name: 'Upgrade your skill',
        completed: false,
        createAt: Date.now()
    }
];

filters.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let id = e.target.dataset.id;
        //console.log(id);
        if (id === 'all') {
            renderTodos(todos);
        } else if (id === 'active') {
            filterTodo = todos.filter(todo => !todo.completed);
            renderTodos(filterTodo);
        } else if (id === 'completed') {
            filterTodo = todos.filter(todo => todo.completed);
            renderTodos(filterTodo);
        }
    })
})

// create todo
const createTodo = (todo, index) => {
    console.log(todo);
    let li = document.createElement('li');
    let input = document.createElement('input');
    let p = document.createElement('p');
    p.innerText = todo.name;
    let img = document.createElement('img');

    li.classList.add('list-group-item');
    img.classList.add('close-btn');

    input.type = 'checkbox';
    input.checked = todo.completed ? "checked" : "";
    todo.completed ? p.classList.add('completed-todo') : p.classList.remove('completed-todo');
    img.src = 'cancel.png';

    li.append(input, p, img);
    listGroup.appendChild(li);
}
//Render todos 
const renderTodos = (todos) => {
    if (todos.length > 0) {
        todos.map((todo, index) => {
            createTodo(todo, index)
        })
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//     renderTodos(todos);
// })

