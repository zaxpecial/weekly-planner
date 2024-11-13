// TO DO LIST
// Elementos
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")

const searchInput = document.querySelector("#search-input")
const eraseBtn = document.querySelector("#erase-button")
const filterBtn = document.querySelector("#filter-select")
const textarea = document.getElementById("day-fill");

let oldInputValue

// Funções
textarea.addEventListener("input", function() {
    // Permitir apenas números
    textarea.value = textarea.value.replace(/[^0-9]/g, '');

    // Limitar o primeiro caractere a 0, 1, 2 ou 3
    if (textarea.value.length > 0 && !/[0-3]/.test(textarea.value[0])) {
        textarea.value = textarea.value.slice(1); // Remove caractere inválido
    }

    // Se o primeiro caractere for "3", o segundo deve ser "0" ou "1"
    if (textarea.value[0] === "3" && textarea.value.length > 1 && !/[01]/.test(textarea.value[1])) {
        textarea.value = textarea.value.slice(0, 1); // Remove o segundo caractere inválido
    }

    // Limitar a no máximo 2 caracteres (extra precaução ao `maxlength`)
    if (textarea.value.length > 2) {
        textarea.value = textarea.value.slice(0, 2);
    }
});

const saveTodo = (text, done = 0, save = 1) =>{
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    // Utilizando dados da local storage
    if(done){
        todo.classList.add("done")
    }

    if(save){
        saveTodoLocalStorage({text, done})
    }

    todoList.appendChild(todo)

    todoInput.value = ""
    todoInput.focus()
}

const toggleForms = ()=>{
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

const updateTodo = (text)=>{
    const todos = document.querySelectorAll(".todo")
    todos.forEach((todo) =>{
        let todoTitle = todo.querySelector("h3")

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text

        updateTodoLocalStorage(oldInputValue, text)
        }
    })
}

const getSearchTodos = (search)=>{
    const todos = document.querySelectorAll(".todo")
    todos.forEach((todo) =>{
        let todoTitle = todo.querySelector("h3").innerText.toLowerCase()

        const normalizedSearch = search.toLowerCase()

        todo.style.display = "flex"


        if(!todoTitle.includes(normalizedSearch)){
            todo.style.display = "none"
        }

    })
}


const filterTodos = (filterValue) =>{
    const todos = document.querySelectorAll(".todo")

    switch (filterValue){
        case "all":
            todos.forEach((todo) => (todo.style.display = "flex"))
            break;

        case "done":
            todos.forEach((todo) =>
                todo.classList.contains("done")
                    ? (todo.style.display = "flex")
                    : (todo.style.display = "none")
            )
            break;
        case "todo":
            todos.forEach((todo) =>
                !todo.classList.contains("done")
                    ? (todo.style.display = "flex")
                    : (todo.style.display = "none")
            )
            break;
        default:
            break;
    }

}

// Eventos
todoForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const inputValue = todoInput.value
    if(inputValue){
        saveTodo(inputValue)
    }
})

document.addEventListener("click", (e) =>{
    const targetEl = e.target
    const parentEl = targetEl.closest("div")
    let todoTitle

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText
    }

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done")

        updateTodoStatusLocalStorage(todoTitle)
    }

    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove()

        removeTodoLocalStorage(todoTitle)
    }
    
    if(targetEl.classList.contains("edit-todo")){
        toggleForms()

        editInput.value= todoTitle
        oldInputValue = todoTitle
    }
})

cancelEditBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    toggleForms()
})

editForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const editInputValue = editInput.value
    
    if(editInputValue){
        updateTodo(editInputValue)
    }

    toggleForms()
})

searchInput.addEventListener("keyup", (e) =>{
    const search = e.target.value

    getSearchTodos(search)
})

eraseBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    searchInput.value = ""

    searchInput.dispatchEvent(new Event("keyup"))
})

filterBtn.addEventListener("change", (e)=>{
    const filterValue = e.target.value

    filterTodos(filterValue)
})

// Local Storage
const getTodosLocalStorage = () =>{
    const todos = JSON.parse(localStorage.getItem("todos")) || []
    return todos
}

const loadTodos =()=>{
    const todos = getTodosLocalStorage()

    todos.forEach((todo) =>{
        saveTodo(todo.text, todo.done, 0)
    })
}


const saveTodoLocalStorage = (todo)=>{
    const todos = getTodosLocalStorage()

    todos.push(todo)

    localStorage.setItem("todos", JSON.stringify(todos))
}

const removeTodoLocalStorage = (todoText)=>{
    const todos = getTodosLocalStorage()
    const filteredTodos = todos.filter((todo) => todo.text !== todoText)
    localStorage.setItem("todos", JSON.stringify(filteredTodos))
}

const updateTodoStatusLocalStorage = (todoText)=>{
    const todos = getTodosLocalStorage()
    todos.map((todo) => todo.text === todoText ? todo.done = !todo.done : null)
    localStorage.setItem("todos", JSON.stringify(todos))
}

const updateTodoLocalStorage = (todoOldText, todoNewText)=>{
    const todos = getTodosLocalStorage()
    todos.map((todo) => todo.text === todoOldText ? todo.text = todoNewText : null)
    localStorage.setItem("todos", JSON.stringify(todos))
}

loadTodos()


// NOTE GRID

// DAY FILL
const dayFillTextarea = document.getElementById("day-fill")

window.addEventListener("load", ()=>{
    const daySavedText = localStorage.getItem("dayTextData")
    if (daySavedText !== null){
        dayFillTextarea.value = daySavedText;
    }
})

dayFillTextarea.addEventListener("input", ()=>{
    localStorage.setItem("dayTextData", dayFillTextarea.value)
})

// SEGUNDA
const mondayTextarea = document.getElementById("monday-textarea")

window.addEventListener("load", ()=>{
    const mondaySavedText = localStorage.getItem("mondayTextData")
    if (mondaySavedText !== null){
        mondayTextarea.value = mondaySavedText;
    }
})

mondayTextarea.addEventListener("input", ()=>{
    localStorage.setItem("mondayTextData", mondayTextarea.value)
})

// TERÇA
const tuesdayTextarea = document.getElementById("tuesday-textarea")

window.addEventListener("load", ()=>{
    const tuesdaySavedText = localStorage.getItem("tuesdayTextData")
    if (tuesdaySavedText !== null){
        tuesdayTextarea.value = tuesdaySavedText;
    }
})

tuesdayTextarea.addEventListener("input", ()=>{
    localStorage.setItem("tuesdayTextData", tuesdayTextarea.value)
})

// QUARTA
const wednesdayTextarea = document.getElementById("wednesday-textarea")

window.addEventListener("load", ()=>{
    const wednesdaySavedText = localStorage.getItem("wednesdayTextData")
    if (wednesdaySavedText !== null){
        wednesdayTextarea.value = wednesdaySavedText;
    }
})

wednesdayTextarea.addEventListener("input", ()=>{
    localStorage.setItem("wednesdayTextData", wednesdayTextarea.value)
})

// QUINTA
const thursdayTextarea = document.getElementById("thursday-textarea")

window.addEventListener("load", ()=>{
    const thursdaySavedText = localStorage.getItem("thursdayTextData")
    if (thursdaySavedText !== null){
        thursdayTextarea.value = thursdaySavedText;
    }
})

thursdayTextarea.addEventListener("input", ()=>{
    localStorage.setItem("thursdayTextData", thursdayTextarea.value)
})

// SEXTA
const fridayTextarea = document.getElementById("friday-textarea")

window.addEventListener("load", ()=>{
    const fridaySavedText = localStorage.getItem("fridayTextData")
    if (fridaySavedText !== null){
        fridayTextarea.value = fridaySavedText;
    }
})

fridayTextarea.addEventListener("input", ()=>{
    localStorage.setItem("fridayTextData", fridayTextarea.value)
})

// SÁBADO
const saturdayTextarea = document.getElementById("saturday-textarea")

window.addEventListener("load", ()=>{
    const saturdaySavedText = localStorage.getItem("saturdayTextData")
    if (saturdaySavedText !== null){
        saturdayTextarea.value = saturdaySavedText;
    }
})

saturdayTextarea.addEventListener("input", ()=>{
    localStorage.setItem("saturdayTextData", saturdayTextarea.value)
})

// DOMINGO
const sundayTextarea = document.getElementById("sunday-textarea")

window.addEventListener("load", ()=>{
    const sundaySavedText = localStorage.getItem("sundayTextData")
    if (sundaySavedText !== null){
        sundayTextarea.value = sundaySavedText;
    }
})

sundayTextarea.addEventListener("input", ()=>{
    localStorage.setItem("sundayTextData", sundayTextarea.value)
})