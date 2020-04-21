const input = document.getElementById("input-new-text");
const button = document.getElementById("todo_button");
button.addEventListener("click", function() {
    addTask();
});
const ul = document.getElementById("TodoList");
let li = document.querySelectorAll("li");
let deletebutton;

const inputLength = function() {
    return input.nodeValue.length;
}

const createDeleteButton = function(parent) {
    let button = document.createElement("button");
    button.appendChild(document.createTextNode("X"));
    button.className = "delete";
}

const toggleClassDone = function() {
    this.classList.toggle("done")
}



const importedTasks = async function() {
    const usableData = await getTasks(); //From here your data is usable
    console.log("this is your useable task data", usableData)
    convertTaskstoList(usableData);
};

convertTaskstoList = function(taskData) {
    console.log("this is your task data", taskData);
    taskData.forEach(taskList => {
        const listItem = document.createElement("li");
        const span = document.createElement("span");
        span.appendChild(document.createTextNode(input.value));
        listItem.appendChild(span);
        const listItemContent = `Description: ${taskList.description}, Done: ${taskList.done}`
        listItem.appendChild(document.createTextNode(listItemContent));
        document.getElementById("TodoList").append(listItem);
        createDeleteButton(li);
        deletebutton = document.querySelectorAll(".delete")
        listItem.addEventListener('click', toggleClassDone)
        input.value = "";
    });
}


// const addListAfterClick = function() {
//     if (inputLength() > 0) {
//         createListElement();
//     }
// }





document.addEventListener('DOMContentLoaded', event => {
    importedTasks();
});

// const trashNode = document.createElement("img");
// trashNode.src = "trash-delete-icon.jpg";
// listItem.appendChild(trashNode);