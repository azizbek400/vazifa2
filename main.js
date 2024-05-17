const todoInput = document.querySelector("#todo-input");
const form = document.querySelector("form");
const result = document.querySelector("#result");

const todos = [];


const createTodo = function (e) {
    e.preventDefault();
    if (todoInput.value.trim() !== "") {
        let newTodo = {
            name: todoInput.value,
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
            isCompleted: false
        }
        todos.push(newTodo);
        localStorage.setItem("todos", JSON.stringify(todos));
        todoInput.value = ""
        renderTodos();
    }else {
        alert("Please enter valid todo!")

    }
}


const renderTodos = function () {
    result.innerHTML= ""
    const todosInlS = JSON.parse(localStorage.getItem("todos"));
    todosInlS?.forEach(todo => {
        result.innerHTML += `
            <h1>${todo.name}</h1>
        `
    });
}

renderTodos()

form.addEventListener("submit", createTodo);