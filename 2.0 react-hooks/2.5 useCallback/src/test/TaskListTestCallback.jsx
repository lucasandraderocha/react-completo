import React, { memo } from "react";

const checkBoxStyle = { height: "1rem", width: "fit-content" };
const containerTaskStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: ".5rem",
};
const listTaskStyle = { listStyleType: "none" };

const TaskListTestCallback = memo(({ forwardedTask, onCompleted }) => {
  return (
    <>
      {forwardedTask.map(task => (
        <li style={listTaskStyle} key={task.id}>
          <fieldset>
            <div style={containerTaskStyle}>
              <input
                type="checkbox"
                style={checkBoxStyle}
                checked={task.completed}
                onChange={() => onCompleted(task.id)}
              />
              {console.log(`Renderizando: ${task.todo}`)}
              <p>{task.todo}</p>
            </div>
          </fieldset>
        </li>
      ))}
    </>
  );
});

export default TaskListTestCallback;
