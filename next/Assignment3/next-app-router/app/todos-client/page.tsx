"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import styles from '../styles.module.css'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function TodosClientPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data: Todo[]) => {
        setTodos(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium animate-pulse">
          Loading...
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className={`${styles.h1} text-3xl font-bold mb-6 text-center`}>
        Client Fetched Todos
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                View Todo
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {todos.slice(0, 20).map((todo) => (
              <tr
                key={todo.id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="px-6 py-4 text-gray-700">
                  {todo.id}
                </td>

                <td className="px-6 py-4 text-gray-800 font-medium">
                  {todo.title}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer
      transition-all duration-200
      ${todo.completed
                        ? "bg-green-100 text-green-700 hover:bg-green-200 hover:scale-105"
                        : "bg-red-100 text-red-700 hover:bg-red-200 hover:scale-105"
                      }`}
                  >
                    {todo.completed ? "Completed" : "Pending"}
                  </span>
                </td>
                <Link href={`/todos/${todo.id}`}>
                    <button
                      className="bg-blue-500 text-white px-2 py-2 my-2 rounded-lg
                                 hover:bg-blue-600
                                 active:scale-95
                                 focus:outline-none
                                 focus:ring-2
                                 focus:ring-blue-400
                                 focus:ring-offset-2
                                 transition-all duration-200
                                 w-[150px]
                                 "
                    >
                      View
                    </button>
                  </Link>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}