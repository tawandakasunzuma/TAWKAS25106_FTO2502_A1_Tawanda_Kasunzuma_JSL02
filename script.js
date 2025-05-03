/* ====================
    Task 1 prompts
==================== */

const taskOneTitle = prompt("Enter task 1 title:").trim();
const taskOneDescription = prompt("Enter task 1 description:").trim();
let taskOneStatus;

// Loop prompt until task 1 status is valid

let taskOneStatusValidity = false;
while (taskOneStatusValidity === false) {
    taskOneStatus = prompt("Enter task 1 status:").trim().toLowerCase();
    // Check validity of status
    if (taskOneStatus === "todo" || taskOneStatus === "doing" || taskOneStatus === "done") {
        // Change task validity status
        taskOneStatusValidity = true;
    } else {
        // Notify user if invalid status is entered
        alert("Invalid status. Please enter 'todo', 'doing' or 'done'.");
    }
}

/* ====================
    Task 2 prompts
==================== */

const taskTwoTitle = prompt("Enter task 2 title:").trim();
const taskTwoDescription = prompt("Enter task 2 description:").trim();
let taskTwoStatus;

/*
    Loop prompt until task 2 status is valid
    Similar to task 1 code
*/

let taskTwoStatusValidity = false;
while (taskTwoStatusValidity === false) {
    taskTwoStatus = prompt("Enter task 2 status:").trim().toLowerCase();
    if (taskTwoStatus === "todo" || taskTwoStatus === "doing" || taskTwoStatus === "done") {
        taskTwoStatusValidity = true;
    } else {
        alert("Invalid status. Please enter 'todo', 'doing' or 'done'.");
    }
}

/* ====================
    Display - completed tasks
==================== */

if (taskOneStatus === "done") {
    console.log(`Title: ${taskOneTitle}, Status: ${taskOneStatus}`);
}

if (taskTwoStatus === "done") {
    console.log(`Title: ${taskTwoTitle}, Status: ${taskTwoStatus}`);
}

/* ====================
    Display - if no tasks completed
==================== */

if (taskOneStatus !== "done" && taskTwoStatus !== "done") {
    console.log("No tasks completed, let's get to work!");
}