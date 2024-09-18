import { Suspense } from "react";
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// 从服务端获取数据
async function FetchTodosData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data: Todo[] = await res.json();
  return data.map((todo) => (
    <div key={todo.id}>{todo.title}</div>
  ))
}
const Todos = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchTodosData/>
    </Suspense>
  );
};

export default Todos;
