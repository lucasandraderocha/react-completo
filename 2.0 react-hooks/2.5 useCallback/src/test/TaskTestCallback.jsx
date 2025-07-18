import { useCallback, useState } from "react";
import TaskListTestCallback from "./TaskListTestCallback";

const TaskTestCallback = () => {
  const [task, setTask] = useState([
    {
      id: 0,
      todo: "Estudar sempre",
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");
  const handleOnCompleted = useCallback(taskId => {
    console.log("executou");
    setTask(prevTask =>
      prevTask.map(someTask =>
        someTask.id === taskId
          ? { ...someTask, completed: !someTask.completed }
          : someTask
      )
    );
  }, []);
  const handleEnter = e => {
    if (e.key !== "Enter") return;
    if (!newTask) return;
    return setTask([
      ...task,
      {
        id: task.length + 1,
        todo: newTask,
        completed: false,
      },
    ]);
  };
  return (
    <>
      <section>
        <h3>Daily Task </h3>
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          onKeyDown={handleEnter}
          placeholder="Take some air..."
        />
        <p>
          Total: {task.map(taskItem => taskItem.completed === false).length}
        </p>
      </section>
      <section>
        <ul>
          <TaskListTestCallback
            forwardedTask={task}
            onCompleted={handleOnCompleted}
          />
        </ul>
      </section>
    </>
  );
};

export default TaskTestCallback;
