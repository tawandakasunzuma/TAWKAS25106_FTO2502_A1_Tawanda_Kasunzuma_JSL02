// Task 1 Title and Description prompts

const taskOneTitle = prompt("Enter task 1 title:");
const taskOneDescription = prompt("Enter task 1 description:");

// Task 1 Status

let taskOneStatusValidity = false;

while (taskOneStatusValidity === false) {
    const taskOneStatus = prompt("Enter task 1 status:").toLowerCase();
    // Check validity of status
    if (taskOneStatus === "todo" || taskOneStatus === "doing" || taskOneStatus === "done") {
        // Change task validity status
        taskOneStatusValidity = true;
    } else {
        // Notify user if invalid choice is entered
        alert("Invalid status. Please enter 'todo', 'doing' or 'done'.");
    }
}


// Similar code to task 1 but for task 2

const taskTwoTitle = prompt("Enter task 2 title:");
const taskTwoDescription = prompt("Enter task 2 description:");

let taskTwoStatusValidity = false;

while (taskTwoStatusValidity === false) {
    const taskTwoStatus = prompt("Enter task 2 status:").toLowerCase();
    if (taskTwoStatus === "todo" || taskTwoStatus === "doing" || taskTwoStatus === "done") {
        taskTwoStatusValidity = true;
    } else {
        alert("Invalid status. Please enter 'todo', 'doing' or 'done'.");
    }
}