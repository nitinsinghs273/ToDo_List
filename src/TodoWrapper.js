import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import TodoBox from "./TodoBox";
import EditForm from "./EditForm";
import { useLocalStorage } from "./useLocalStorage";

uuidv4();

function TodoWrapper({ task, handleAdd }) {
  const [toDo, setToDo] = useLocalStorage([], "tasks");

  function AddTask(todos) {
    if (todos === "") return;
    setToDo([
      ...toDo,
      { id: uuidv4(), task: todos, isComplete: false, isEditing: false },
    ]);
  }

  function HandleEdit(id) {
    setToDo(
      toDo.map((value) =>
        value.id === id ? { ...value, isEditing: !value.isEditing } : value
      )
    );
  }

  function EditToDo(value, id) {
    if (value === "") return;
    setToDo(
      toDo.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing, value } : item
      )
    );
  }

  function HandleDelete(id) {
    setToDo(toDo.filter((item) => item.id !== id));
  }
  function handleComplete(id) {
    setToDo(
      toDo.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  }
  return (
    <div className="Container">
      <h1>Things to do</h1>
      <TodoForm AddTask={AddTask} />

      {toDo.map((toDo, key) =>
        toDo.isEditing ? (
          <EditForm onEditToDo={EditToDo} task={toDo} key={key} />
        ) : (
          <TodoBox
            task={toDo}
            HandleEdit={HandleEdit}
            HandleDelete={HandleDelete}
            handleComplete={handleComplete}
            key={key}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
