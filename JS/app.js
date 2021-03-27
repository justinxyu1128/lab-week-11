let todoList = [{todo: "clone repo for starter code", status:"complete",}, {todo: "create array todoList", status:"complete"}, {todo: "create array completedTodos", status:"started"}, {todo: "create for loops", status:"started"}];
let completedTodos = [];
for (let i of todoList) {
    if (i.status === "complete") {
        completedTodos.push(i);
    }
}
for (let u of completedTodos) {
    let {todo, status} = u;
    console.log(todo);
}