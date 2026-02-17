interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export default async function TodoPage({ params } ) {
  const { todoId } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <h1>Todo not found</h1>;
  }

  const todo : Todo = await res.json();

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Todo Details</h1>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <p>
          <strong>ID:</strong> {todo.id}
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
      </div>
    </div>
  );
}
