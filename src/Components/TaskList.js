import React from "react";

const TaskList = ({ taskList, deleteTask }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div key={task.id}>
          <h3> {task.text}</h3>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
