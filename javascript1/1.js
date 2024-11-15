const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    if (inputBox.value === '') {
        alert("Enter something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // Unicode for multiplication sign
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Event listener to handle task checking and deletion
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save the list to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to show the saved tasks from localStorage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || ""; // Prevent null value
}

// Load tasks when the page is loaded
showTask();
