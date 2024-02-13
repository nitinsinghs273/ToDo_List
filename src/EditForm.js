import { useEffect, useRef, useState } from "react";

function EditForm({ onEditToDo, task }) {
  const [values, setValues] = useState(task.task);
  const inputEl = useRef(null);
  useEffect(function () {
    inputEl.current.focus();
  });

  function handleSubmit(e) {
    e.preventDefault();
    onEditToDo(values, task.id);
    setValues("");
  }

  return (
    <form className="edit_form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="edit-input"
        placeholder="Mention Updates"
        ref={inputEl}
        value={values}
        onChange={(e) => setValues(e.target.value)}
      />
      <button className="edit-btn">Update </button>
    </form>
  );
}

export default EditForm;
