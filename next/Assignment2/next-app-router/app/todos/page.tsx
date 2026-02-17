import Link from "next/link";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export default async function TodosPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store",
  });

  if (!res.ok) {
    return <h1>Todos not found</h1>;
  }

  const todos  = await res.json();

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>All Todos</h1>

      {todos.map((todo : Todo) => (
        <div
          key={todo.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          <p>
            <strong>Todo ID:</strong> {todo.id}
          </p>
          <p>
            <strong>User ID:</strong> {todo.userId}
          </p>
          <p>
            <strong>Title:</strong> {todo.title}
          </p>
          <p>
            <strong>Completed:</strong> {todo.completed ? "Completed" : "Not Completed"}
          </p>

          <Link
            href={`/todos/${todo.id}`}
            style={{ color: "blue", textDecoration: "underline" }}
          >
            <button style={{ backgroundColor : "blue", color : "white", padding : "5px", borderRadius : "10px", cursor : "pointer" }}>View Details</button>
            
          </Link>
        </div>
      ))}
    </div>
  );
}
