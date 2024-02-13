import { useEffect, useRef, useState } from "react";

function TodoForm({ AddTask }) {
  const [task, setTask] = useState("");
  const inputEl = useRef(null);

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  function handleAdd(e) {
    e.preventDefault();
    AddTask(task);
    setTask("");
  }

  return (
    <form className="todo-form" onSubmit={handleAdd}>
      <input
        type="text"
        className="todo-input"
        placeholder="what is the task today?"
        value={task}
        ref={inputEl}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="todo-btn">Add Task</button>
    </form>
  );
}

export default TodoForm;
