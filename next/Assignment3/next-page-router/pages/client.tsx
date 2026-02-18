import { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
    id: number;
    title: string;
    body: string;
}

export default function ClientPage() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data: Post[] = await res.json();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl text-black font-bold mb-6 text-center">
                Posts
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
                            
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {posts.map((post) => (
                            <tr
                                key={post.id}
                                className="hover:bg-gray-100 transition-colors duration-200"
                            >
                                <td className="px-6 py-4 text-gray-700">
                                    {post.id}
                                </td>

                                <td className="px-6 py-4 text-gray-800 font-medium">
                                    {post.title}
                                </td>

                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}