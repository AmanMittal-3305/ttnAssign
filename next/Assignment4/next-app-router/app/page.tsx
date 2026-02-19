import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>

      <Link href="/products">
        Go to Products Page
      </Link>
      <br></br>
      <Link href="/quotes">
        Go to Quotes Page
      </Link>
    </div>
  );
}
