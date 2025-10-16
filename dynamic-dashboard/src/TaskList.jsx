import React from "react";

const TaskList = () => {
    const tasks = [
        {
            taskName: "Make a free account",
            completed: true
        },
        {
            taskName: "Sign up for Premium Membership",
            completed: false
        },
        {
            taskName: "Select subscription plan",
            completed: false
        }
    ];
    let complete = 0;
    let incomplete = 0
    tasks.forEach((task)=>{
        task.completed ? ++complete : ++incomplete}
    );
    return (
        <div>

            {tasks.map((task) => (
                <h3 key={task.taskName} style={{ color: task.completed ? "green" : "red" }} >{task.completed ? task.taskName + " ✅" : task.taskName + " ❌"}</h3>
            ))}
            <h4>Completed Tasks: {complete} | Incompleted Tasks: {incomplete}</h4>
        </div>
    );

}

export default TaskList;