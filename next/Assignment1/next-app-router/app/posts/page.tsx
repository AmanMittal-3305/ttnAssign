
export default async function Home() {

  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await data.json();
  const slicedPosts = posts.slice(0, 10);

  return (
    <div className="p-6">
      {slicedPosts.map((post) => (

        <div key={post.id} className="border p-4 mb-4 rounded">
          <h2 className="font-semibold">Post #{post.id}</h2>

          <p>
            <strong>Title:</strong> {post.title}
          </p>

          <p>
            <strong>Body:</strong> {post.body}
          </p>
        </div>
      ))}



    </div>
  );
}