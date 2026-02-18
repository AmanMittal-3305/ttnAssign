import { GetServerSideProps } from "next";
import styles from '../../styles/styles.module.css'
import styled from 'styled-components'

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  post: Post;
}

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;


export default function PostPage({ post }: Props) {
  return (
  <CenteredDiv>
    <div
      className="max-w-2xl w-full bg-white rounded-xl shadow-md p-8
                 hover:shadow-2xl transition-shadow duration-300"
    >
      <h1 className={`${styles.h1} text-3xl font-bold mb-6`}>
        SSR Dynamic Page
      </h1>

      <h2 className={`${styles.h2} text-xl font-semibold mb-4 text-gray-800
                     hover:text-blue-600 transition-colors duration-300`}>
        <strong>Post Title :</strong> {post.title}
      </h2>

      <p className="text-gray-600 mb-6 leading-relaxed">
        <strong>Post Body :</strong> {post.body}
      </p>
    </div>
  </CenteredDiv>
);

}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { id } = await context.params as { id: string };

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!res.ok) {
    return { notFound: true };
  }

  const post: Post = await res.json();

  return {
    props: { post },
  };
};
