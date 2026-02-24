import { revalidatePosts } from "./actions";

async function getCachedData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "force-cache", 
  });

  return res.json();
}

async function getNoStoreData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store",
  });

  return res.json();
}

async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: {
        tags: ["posts"],
      },
    }
  );

  return res.json();
}

export default async function Page() {
  const cached = await getCachedData();
  const noStore = await getNoStoreData();
  const posts = await getPosts();

  return (
    <div>
      <h2>Force Cache</h2>
      <p>{cached.title}</p>

      <h2>No Store</h2>
      <p>{noStore.title}</p>

      <div>
      <form action={revalidatePosts}>
        <button type="submit">Revalidate Posts</button>
      </form>

      {posts.slice(0, 5).map((post: any) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
    </div>
  );
}

