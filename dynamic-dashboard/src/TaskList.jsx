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
    return (

        tasks.map((task) => {
            return (
            <div>
                <h3>{task.completed ? task.taskName + " ✅" : task.taskName + " ❌"}</h3>
            </div>)
        })

    );

}

export default TaskList;