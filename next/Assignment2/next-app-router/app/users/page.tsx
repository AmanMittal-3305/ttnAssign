import Link from "next/link";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function UsersPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-store" }
  );

  const users: User[] = await res.json();

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px"}}>All Users</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h2>User {user.id}</h2>

          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>

          <Link
            href={`/users/${user.id}`}
          >
            <button style={{ backgroundColor : "blue", color : "white", padding : "5px", borderRadius : "10px", cursor : "pointer" }}>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
