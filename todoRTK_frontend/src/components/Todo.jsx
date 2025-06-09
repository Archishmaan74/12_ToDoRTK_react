import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl text-center font-medium mb-4">Todos</h2>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-zinc-700 px-4 py-2 rounded"
          >
            <span className="text-white">{todo.textValue}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
