import Link from "next/link";


interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch user")
  }

  const user: User = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Details</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>

      <Link href={`/users/${userId}/todos`}>
      <button style={{ backgroundColor : "blue", color : "white", padding : "5px", borderRadius : "10px", cursor : "pointer" }}>View Todos</button>
  
</Link>

    </div>
  );
}
