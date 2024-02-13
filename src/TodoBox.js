import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function TodoBox({ task, HandleEdit, HandleDelete, handleComplete }) {
  return (
    <div className="box">
      <div className="descrip">
        <p
          className={task.isComplete ? "complete" : "dis_task"}
          onClick={() => handleComplete(task.id)}
        >
          {task.task}
        </p>
      </div>

      <div className="icons">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="icon"
          onClick={() => HandleEdit(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrashCan}
          className="icon"
          onClick={() => HandleDelete(task.id)}
        />
      </div>
    </div>
  );
}

export default TodoBox;
