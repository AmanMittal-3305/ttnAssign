import Link from "next/link";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default async function UserTodosPage({ params }: { params: { userId: string } }) {
  const { userId } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <h1>Todos not found</h1>;
  }

  const todos: Todo[] = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{fontSize : "30px", fontWeight : "bold"}}>Todos for User with UserID {userId} :</h1>
      {todos.length === 0 && <p>No todos found for this user.</p>}

      {todos.map((todo) => (
        <div key={todo.id} style={{ marginBottom: 10 }}>
          <p>
            <strong>{todo.title}</strong> — {todo.completed ? "Completed" : "Not completed"}
          </p>
          <Link href= {`/todos/${todo.id}`}>
          <button style={{ backgroundColor : "blue", color : "white", padding : "5px", borderRadius : "10px", cursor : "pointer" }}>View todo</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
