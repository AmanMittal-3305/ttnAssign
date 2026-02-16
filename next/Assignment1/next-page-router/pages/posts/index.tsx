import { GetServerSideProps } from "next";

type Post = {
  id: number;
  title: string;
  body: string;
};

type Props = {
  posts: Post[];
};  

export default function Home({ posts }: Props) {
  return (
    <div className="p-6">
      {posts.map((post) => (
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

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data.slice(0, 10),
    },
  };
};
