import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  const handleDelete = (taskText) => {
    // Remove the task with the matching text
    const updatedTasks = taskList.filter(task => task.text !== taskText);
    setTaskList(updatedTasks);
  };

  return (
    <div className="tasks">
      {taskList.map((task) => (
        <Task 
          key={task.text} 
          text={task.text} 
          category={task.category} 
          onDelete={handleDelete} 
        />
      ))}
    </div>
  );
}

export default TaskList;
