import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../features/todo/todoSlice";
import { useState } from "react";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setEditInput(todo.textValue);
  };

  const handleEditSubmit = () => {
    dispatch(editTodo({ id: editId, textValue: editInput.trim() }));
    setEditId(null);
    setEditInput("");
  };

  return (
    <div>
      <h2 className="text-xl text-center font-medium mb-4">Todos</h2>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-zinc-700 px-4 py-2 rounded"
          >
            {editId === todo.id ? (
              <input
                type="text"
                className="flex-1 bg-zinc-800 text-white px-2 py-1 rounded mr-2"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
              />
            ) : (
              <span className="text-white mr-48">{todo.textValue}</span>
            )}
            {editId === todo.id ? (
              <button
                onClick={handleEditSubmit}
                className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded transition"
              >
                💾
              </button>
            ) : (
              <button
                onClick={() => handleEditClick(todo)}
                className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded transition"
              >
                ✏️
              </button>
            )}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
