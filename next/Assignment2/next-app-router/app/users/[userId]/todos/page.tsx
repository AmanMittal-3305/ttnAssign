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
    return <h1 style={{ textAlign: "center", marginTop: "50px" }}>Todos not found</h1>;
  }

  const todos: Todo[] = await res.json();

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>
        Todos for User {userId}
      </h1>

      {todos.length === 0 && (
        <p style={{ textAlign: "center", color: "#555" }}>No todos found for this user.</p>
      )}

      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            padding: "15px",
            marginBottom: "12px",
            borderRadius: "6px",
            border: "1px solid #ddd",
          }}
        >
          <p style={{ margin: "0 0 8px 0", fontWeight: "600" }}>{todo.title}</p>
          <p style={{ margin: "0 0 10px 0", color: "gray" }}>
            Status: {todo.completed ? "Completed" : "Not Completed"}
          </p>
          <Link href={`/todos/${todo.id}`}>
            <button
              style={{
                padding: "6px 12px",
                backgroundColor: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
            >
              View Todo
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
