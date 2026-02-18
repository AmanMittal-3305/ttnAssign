import Link from "next/link";
import styled from "styled-components";
import styles from '../../styles.module.css'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
`;

const Card = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
  text-align: center;

  
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #333;
`;

const Text = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #555;
`;

const Status = styled.p<{ completed: boolean }>`
  margin: 1rem 0;
  font-weight: bold;
  color: ${({ completed }) => (completed ? "#2ecc71" : "#e74c3c")};
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  background-color: #4f46e5;
  color: white;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    background-color: #4338ca;
  }
`;

interface Props {
  params: { id: string };
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function generateStaticParams() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const todos: Todo[] = await res.json();

  return todos.slice(0, 20).map((todo) => ({
    id: todo.id.toString(),
  }));
}

export const revalidate = 10; 

export default async function TodoDetail({ params }: Props) {
  const { id } = await params; 

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      next: { revalidate: 10 },
    }
  );

  const todo = await res.json();

  return (
    <Wrapper>
      <Card>
        <Title className={styles.h2}>Todo Detail</Title>
        <Text >ID: {todo.id}</Text>
        <Text>{todo.title}</Text>
        <Status completed={todo.completed}>
          {todo.completed ? "Completed" : "Pending"}
        </Status>
        <BackButton href="/todos">Back</BackButton>
      </Card>
    </Wrapper>
  );
}
