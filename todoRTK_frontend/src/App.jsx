import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-zinc-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Learn about Redux Toolkit
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
