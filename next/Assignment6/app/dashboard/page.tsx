"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardPage = () => {
    type User = {
        id : number,
        name : string
    }
  const { data: session, status } = useSession();
  const router = useRouter();
  // const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await res.json();
  //     setUsers(data);
  //   }

  //   fetchData();
  // }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) return null;

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <>
      <h1>Dashboard Page</h1>
      <p>Name: {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
      <button onClick={handleLogout}>Sign out</button>


     
    </>
  );
};

export default DashboardPage;