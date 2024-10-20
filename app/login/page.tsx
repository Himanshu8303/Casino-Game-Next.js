'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  useEffect(() => {
    const logoutReason = localStorage.getItem('logoutReason')
    if (logoutReason) {
      setMessage(logoutReason)
      localStorage.removeItem('logoutReason')
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!username || !password) {
      setError('Please enter both username and password')
      return
    }

    
    localStorage.setItem('username', username)
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Card className="w-full max-w-md p-8 bg-gray-900 text-white">
        <h1 className="text-3xl font-bold text-yellow-500 mb-6 text-center">RANOLPH</h1>
        {message && (
          <Alert className="mb-4 bg-green-500 text-white">
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
        {error && (
          <Alert className="mb-4 bg-red-500 text-white">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-1">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
          </div>
          <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
            Login
          </Button>
        </form>
      </Card>
    </div>
  )
}
