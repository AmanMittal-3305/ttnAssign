import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import styles from "../../styles/styles.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  post: Post;
}

export default function PostPage({ post }: Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div
        className="max-w-2xl w-full bg-white rounded-xl shadow-md p-8
                   hover:shadow-2xl transition-shadow duration-300"
      >
        <h1 className={`${styles.h1} text-3xl font-bold mb-6`}>
          SSG Dynamic Page
        </h1>

        <h2
          className={`${styles.h2} text-xl font-semibold mb-4
                      hover:text-blue-600 transition-colors duration-300`}
        >
          <strong>Post Title :</strong> {post.title}
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          <strong>Post Body :</strong> {post.body}
        </p>

        <div className="flex gap-4">
          <button
            className="bg-blue-500 text-white px-5 py-2.5 rounded-lg
                       font-medium
                       hover:bg-blue-600
                       active:scale-95
                       focus:outline-none
                       focus:ring-2
                       focus:ring-blue-400
                       focus:ring-offset-2
                       transition-all duration-200"
          >
            Sample Button
          </button>

          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg border border-gray-300
                       text-gray-700
                       hover:bg-gray-200
                       focus:outline-none
                       focus:ring-2
                       focus:ring-gray-400
                       focus:ring-offset-2
                       transition-all duration-200"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}) => {
  const id = params?.id as string;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!res.ok) {
    return { notFound: true };
  }

  const post: Post = await res.json();

  return {
    props: { post },
    revalidate: 10,
  };
};
