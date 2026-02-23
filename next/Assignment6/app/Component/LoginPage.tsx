"use client"

import { useEffect, useState } from "react"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const { status } = useSession()
  const router = useRouter()
  const [seconds, setSeconds] = useState(5)

  const handleLogin = async () => {
    await signIn("google") 
  }

  useEffect(() => {
    if (status !== "authenticated") return

    if (seconds === 0) {
      router.push("/dashboard")
      return
    }

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [status, seconds, router])

  if (status === "loading") {
    return <p>Checking authentication...</p>
  }

  if (status === "authenticated") {
    return (
      <h3>
        Already logged in, Redirecting you in {seconds}
      </h3>
    )
  }

  return (
    <button onClick={handleLogin}>
      Sign In using Google
    </button>
  )
}