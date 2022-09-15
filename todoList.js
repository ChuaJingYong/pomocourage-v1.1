// Select DOM Elements
const todoInput = document.querySelector("#todoInput")
const todoList = document.querySelector("#todoList")
const allItmes = document.querySelectorAll("#todoList li")
const todoButton = document.querySelector("#todoButton")

// Event Listener: Add Todo Button
console.log(todoInput,todoList,todoButton)
// Feature: Add Todo

todoInput.addEventListener("keypress",e=>{
    if(e.key ==="Enter"){
        e.preventDefault()
        addTodo()
    }
})

todoButton.addEventListener("click", e=>{
    e.preventDefault
    addTodo()
})

function addTodo(){
    const todoInput = document.querySelector("#todoInput")
    console.log("todo list values => ",todoList)
    // id
    const id = todoList.children.length + 1

    // value
    const item = todoInput.value
    if (!item) return

    console.log(todoInput.value)

    const newTodo = `
        <li id = ${id}>
            <button onclick = completeTodo(${id})>Complete</button>
            <span>${item}</span>
            <button onclick = deleteTodo(${id})>Delete</button>
        </li>
        `
        
        // <img onclick = completeTodo(${id}) class="not-done" src="https://cdn-icons-png.flaticon.com/512/5290/5290594.png" alt="Not Done Icon">
    todoList.innerHTML += newTodo

    // Remove prev input
    document.querySelector("#todoInput").value = ""
}

function findTodo(id){
    return todoList.children[id-1]
}

function completeTodo(id){
    const todoItem = findTodo(id)
    console.log(todoItem)

    const itemSpan = todoItem.firstElementChild
    itemSpan.toggleAttribute("done")

    const completeStatus = itemSpan.getAttribute("done") === null? false:true //syntax is checking if condition is matched or not, either option A or B will be the returned value
    // Official syntax ==> condition ? exprIfTrue : exprIfFalse
    console.log(completeStatus)
    const completeButton = todoItem.children[1]
    completeButton.innerHTML = completeStatus? "Undo":"Completed"
}

// Feature: Delete Todo
function deleteTodo(id){
    const todoItem = findTodo(id)
    
    console.log(todoItem)
}

// Using the ?? as Nullish Coalescing to handle for and return default values if null or error encountered
// The idea is if the result is null or undefined on the left side, use the default value on the right side
const value1 = '' ?? 'default string';
console.log(value1);


const value2 = null?? 1000;
console.log(value2);

// if the result is either a 0 or '' empty string, then it'll still display 0 or empty string. 
// ?? operand makes sure to cover only for null and undefined cases

// Make a pop up and enter div to allow user to add new tasks
// Add draggable class to the new todos
// Check the toggle function of the todos
// Modify the check mark to toggle
// Add a dustbin and remove task. Add a double check option