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
const textareaMonday = document.getElementById("monday-fill");
const textareaTuesday = document.getElementById("tuesday-fill");
const textareaWednesday = document.getElementById("wednesday-fill");
const textareaThursday = document.getElementById("thursday-fill");
const textareaFriday = document.getElementById("friday-fill");
const textareaSaturday = document.getElementById("saturday-fill");
const textareaSunday = document.getElementById("sunday-fill");

let oldInputValue

// Funções
textareaMonday.addEventListener("input", function() {
    // Permitir apenas números
    textareaMonday.value = textareaMonday.value.replace(/[^0-9]/g, '');

    // Limitar o primeiro caractere a 0, 1, 2 ou 3
    if (textareaMonday.value.length > 0 && !/[0-3]/.test(textareaMonday.value[0])) {
        textareaMonday.value = textareaMonday.value.slice(1); // Remove caractere inválido
    }

    // Se o primeiro caractere for "3", o segundo deve ser "0" ou "1"
    if (textareaMonday.value[0] === "3" && textareaMonday.value.length > 1 && !/[01]/.test(textareaMonday.value[1])) {
        textareaMonday.value = textareaMonday.value.slice(0, 1); // Remove o segundo caractere inválido
    }

    // Limitar a no máximo 2 caracteres (extra precaução ao `maxlength`)
    if (textareaMonday.value.length > 2) {
        textareaMonday.value = textareaMonday.value.slice(0, 2);
    }
});

textareaTuesday.addEventListener("input", function() {
    // Permitir apenas números
    textareaTuesday.value = textareaTuesday.value.replace(/[^0-9]/g, '');

    // Limitar o primeiro caractere a 0, 1, 2 ou 3
    if (textareaTuesday.value.length > 0 && !/[0-3]/.test(textareaTuesday.value[0])) {
        textareaTuesday.value = textareaTuesday.value.slice(1); // Remove caractere inválido
    }

    // Se o primeiro caractere for "3", o segundo deve ser "0" ou "1"
    if (textareaTuesday.value[0] === "3" && textareaTuesday.value.length > 1 && !/[01]/.test(textareaTuesday.value[1])) {
        textareaTuesday.value = textareaTuesday.value.slice(0, 1); // Remove o segundo caractere inválido
    }

    // Limitar a no máximo 2 caracteres (extra precaução ao `maxlength`)
    if (textareaTuesday.value.length > 2) {
        textareaTuesday.value = textareaTuesday.value.slice(0, 2);
    }
});

textareaWednesday.addEventListener("input", function() {
    // Permitir apenas números
    textareaWednesday.value = textareaWednesday.value.replace(/[^0-9]/g, '');

    // Limitar o primeiro caractere a 0, 1, 2 ou 3
    if (textareaWednesday.value.length > 0 && !/[0-3]/.test(textareaWednesday.value[0])) {
        textareaWednesday.value = textareaWednesday.value.slice(1); // Remove caractere inválido
    }

    // Se o primeiro caractere for "3", o segundo deve ser "0" ou "1"
    if (textareaWednesday.value[0] === "3" && textareaWednesday.value.length > 1 && !/[01]/.test(textareaWednesday.value[1])) {
        textareaWednesday.value = textareaWednesday.value.slice(0, 1); // Remove o segundo caractere inválido
    }

    // Limitar a no máximo 2 caracteres (extra precaução ao `maxlength`)
    if (textareaWednesday.value.length > 2) {
        textareaWednesday.value = textareaWednesday.value.slice(0, 2);
    }
});

textareaThursday.addEventListener("input", function() {
    // Permitir apenas números
    textareaThursday.value = textareaThursday.value.replace(/[^0-9]/g, '');

    // Limitar o primeiro caractere a 0, 1, 2 ou 3
    if (textareaThursday.value.length > 0 && !/[0-3]/.test(textareaThursday.value[0])) {
        textareaThursday.value = textareaThursday.value.slice(1); // Remove caractere inválido
    }

    // Se o primeiro caractere for "3", o segundo deve ser "0" ou "1"
    if (textareaThursday.value[0] === "3" && textareaThursday.value.length > 1 && !/[01]/.test(textareaThursday.value[1])) {
        textareaThursday.value = textareaThursday.value.slice(0, 1); // Remove o segundo caractere inválido
    }

    // Limitar a no máximo 2 caracteres (extra precaução ao `maxlength`)
    if (textareaThursday.value.length > 2) {
        textareaThursday.value = textareaThursday.value.slice(0, 2);
    }
});

textareaFriday.addEventListener("input", function() {
    // Permitir apenas números
    textareaFriday.value = textareaFriday.value.replace(/[^0-9]/g, '');

    // Limitar o primeiro caractere a 0, 1, 2 ou 3
    if (textareaFriday.value.length > 0 && !/[0-3]/.test(textareaFriday.value[0])) {
        textareaFriday.value = textareaFriday.value.slice(1); // Remove caractere inválido
    }

    // Se o primeiro caractere for "3", o segundo deve ser "0" ou "1"
    if (textareaFriday.value[0] === "3" && textareaFriday.value.length > 1 && !/[01]/.test(textareaFriday.value[1])) {
        textareaFriday.value = textareaFriday.value.slice(0, 1); // Remove o segundo caractere inválido
    }

    // Limitar a no máximo 2 caracteres (extra precaução ao `maxlength`)
    if (textareaFriday.value.length > 2) {
        textareaFriday.value = textareaFriday.value.slice(0, 2);
    }
});

textareaSaturday.addEventListener("input", function() {
    // Permitir apenas números
    textareaSaturday.value = textareaSaturday.value.replace(/[^0-9]/g, '');

    // Limitar o primeiro caractere a 0, 1, 2 ou 3
    if (textareaSaturday.value.length > 0 && !/[0-3]/.test(textareaSaturday.value[0])) {
        textareaSaturday.value = textareaSaturday.value.slice(1); // Remove caractere inválido
    }

    // Se o primeiro caractere for "3", o segundo deve ser "0" ou "1"
    if (textareaSaturday.value[0] === "3" && textareaSaturday.value.length > 1 && !/[01]/.test(textareaSaturday.value[1])) {
        textareaSaturday.value = textareaSaturday.value.slice(0, 1); // Remove o segundo caractere inválido
    }

    // Limitar a no máximo 2 caracteres (extra precaução ao `maxlength`)
    if (textareaSaturday.value.length > 2) {
        textareaSaturday.value = textareaSaturday.value.slice(0, 2);
    }
});

textareaSunday.addEventListener("input", function() {
    // Permitir apenas números
    textareaSunday.value = textareaSunday.value.replace(/[^0-9]/g, '');

    // Limitar o primeiro caractere a 0, 1, 2 ou 3
    if (textareaSunday.value.length > 0 && !/[0-3]/.test(textareaSunday.value[0])) {
        textareaSunday.value = textareaSunday.value.slice(1); // Remove caractere inválido
    }

    // Se o primeiro caractere for "3", o segundo deve ser "0" ou "1"
    if (textareaSunday.value[0] === "3" && textareaSunday.value.length > 1 && !/[01]/.test(textareaSunday.value[1])) {
        textareaSunday.value = textareaSunday.value.slice(0, 1); // Remove o segundo caractere inválido
    }

    // Limitar a no máximo 2 caracteres (extra precaução ao `maxlength`)
    if (textareaSunday.value.length > 2) {
        textareaSunday.value = textareaSunday.value.slice(0, 2);
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

// DAY FILL - SEGUNDA
const mondayFillTextarea = document.getElementById("monday-fill")

window.addEventListener("load", ()=>{
    const mondayFillSavedText = localStorage.getItem("mondayFillTextData")
    if (mondayFillSavedText !== null){
        mondayFillTextarea.value = mondayFillSavedText;
    }
})

mondayFillTextarea.addEventListener("input", ()=>{
    localStorage.setItem("mondayFillTextData", mondayFillTextarea.value)
})

// DAY FILL - TERÇA
const tuesdayFillTextarea = document.getElementById("tuesday-fill")

window.addEventListener("load", ()=>{
    const tuesdayFillSavedText = localStorage.getItem("tuesdayFillTextData")
    if (tuesdayFillSavedText !== null){
        tuesdayFillTextarea.value = tuesdayFillSavedText;
    }
})

tuesdayFillTextarea.addEventListener("input", ()=>{
    localStorage.setItem("tuesdayFillTextData", tuesdayFillTextarea.value)
})

// DAY FILL - QUARTA
const wednesdayFillTextarea = document.getElementById("wednesday-fill")

window.addEventListener("load", ()=>{
    const wednesdayFillSavedText = localStorage.getItem("wednesdayFillTextData")
    if (wednesdayFillSavedText !== null){
        wednesdayFillTextarea.value = wednesdayFillSavedText;
    }
})

wednesdayFillTextarea.addEventListener("input", ()=>{
    localStorage.setItem("wednesdayFillTextData", wednesdayFillTextarea.value)
})

// DAY FILL - QUINTA
const thursdayFillTextarea = document.getElementById("thursday-fill")

window.addEventListener("load", ()=>{
    const thursdayFillSavedText = localStorage.getItem("thursdayFillTextData")
    if (thursdayFillSavedText !== null){
        thursdayFillTextarea.value = thursdayFillSavedText;
    }
})

thursdayFillTextarea.addEventListener("input", ()=>{
    localStorage.setItem("thursdayFillTextData", thursdayFillTextarea.value)
})

// DAY FILL - SEXTA
const fridayFillTextarea = document.getElementById("friday-fill")

window.addEventListener("load", ()=>{
    const fridayFillSavedText = localStorage.getItem("fridayFillTextData")
    if (fridayFillSavedText !== null){
        fridayFillTextarea.value = fridayFillSavedText;
    }
})

fridayFillTextarea.addEventListener("input", ()=>{
    localStorage.setItem("fridayFillTextData", fridayFillTextarea.value)
})

// DAY FILL - SÁBADO
const saturdayFillTextarea = document.getElementById("saturday-fill")

window.addEventListener("load", ()=>{
    const saturdayFillSavedText = localStorage.getItem("saturdayFillTextData")
    if (saturdayFillSavedText !== null){
        saturdayFillTextarea.value = saturdayFillSavedText;
    }
})

saturdayFillTextarea.addEventListener("input", ()=>{
    localStorage.setItem("saturdayFillTextData", saturdayFillTextarea.value)
})

// DAY FILL - DOMINGO
const sundayFillTextarea = document.getElementById("sunday-fill")

window.addEventListener("load", ()=>{
    const sundayFillSavedText = localStorage.getItem("sundayFillTextData")
    if (sundayFillSavedText !== null){
        sundayFillTextarea.value = sundayFillSavedText;
    }
})

sundayFillTextarea.addEventListener("input", ()=>{
    localStorage.setItem("sundayFillTextData", sundayFillTextarea.value)
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