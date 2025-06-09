import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo(input.trim()));
    setInput("");
  };

  return (
    <form onSubmit={handleAddTodo} className="flex gap-3 mb-6">
      <input
        type="text"
        className="flex-1 bg-zinc-700 rounded px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white font-medium transition"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
