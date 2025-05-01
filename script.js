// Task 1 prompts

const taskOneTitle = prompt("Enter task 1 title:");
const taskOneDescription = prompt("Enter task 1 description:");
let taskOneStatus;

// Loop prompt until task 1 status is valid

let taskOneStatusValidity = false;
while (taskOneStatusValidity === false) {
    taskOneStatus = prompt("Enter task 1 status:").toLowerCase();
    // Check validity of status
    if (taskOneStatus === "todo" || taskOneStatus === "doing" || taskOneStatus === "done") {
        // Change task validity status
        taskOneStatusValidity = true;
    } else {
        // Notify user if invalid status is entered
        alert("Invalid status. Please enter 'todo', 'doing' or 'done'.");
    }
}

// Task 2 prompts
const taskTwoTitle = prompt("Enter task 2 title:");
const taskTwoDescription = prompt("Enter task 2 description:");
let taskTwoStatus;

/*
    Loop prompt until task 2 status is valid.
    Similar to task 1 code
*/

let taskTwoStatusValidity = false;
while (taskTwoStatusValidity === false) {
    taskTwoStatus = prompt("Enter task 2 status:").toLowerCase();
    if (taskTwoStatus === "todo" || taskTwoStatus === "doing" || taskTwoStatus === "done") {
        taskTwoStatusValidity = true;
    } else {
        alert("Invalid status. Please enter 'todo', 'doing' or 'done'.");
    }
}

// Display completed tasks

if (taskOneStatus === "done") {
    console.log(`Title: ${taskOneTitle}, status: ${taskOneStatus}`);
}

if (taskTwoStatus === "done") {
    console.log(`Title: ${taskTwoTitle}, status: ${taskTwoStatus}`);
}

// Display if no tasks completed

if (taskOneStatus !== "done" && taskTwoStatus !== "done") {
    console.log("No tasks completed, let's get to work!");
}