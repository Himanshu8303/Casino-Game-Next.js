'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Fullscreen, Menu, LogOut } from "lucide-react"

export default function GameSelection() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('username')
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://s3-alpha-sig.figma.com/img/850e/4153/42a513e4e1c22278a91fcee8c0e476ae?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=owuqroqOobdlQ6qtuDurx4yqUDreCW0ELIGqDIzKyvAaLgrUUyDXh2mWGxxxQ1YU9SwIVxsPQ9HEJC7KhdBGlrERWD9WyQoFAQv5UF~if9yz5ymywbRB-PvFZcDsl5Jv8UazH2jx3q8ThtolX6GzI-jt8HTZd5rSFZPYF2Zsgzfz2~S6GSZHhZokYCNSc1l0t370q5CRJXrHUjtf6oOH8WZTP5s3CeAt9Ezql-N8Yh4Ui~LMRGGfCwNhmQXn4BfT4oZJBNN8kt2vcB-7elPST9bQgOju2~RTuYU2GeWkmx8ppy76bAwtn7M65rkM6O8sETq3SHCF5aWn4IeQsljZBA__')"}}>
      <div className="min-h-screen bg-black bg-opacity-50 text-white">
        <header className="flex justify-between items-center p-4 bg-gradient-to-b from-yellow-900 to-transparent">
          <div className="w-8 h-8 rounded-full bg-gray-800"></div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
            <span className="text-xl font-bold">0.00</span>
            <div className="w-8 h-8 rounded-full bg-gray-800"></div>
          </div>
          <h1 className="text-3xl font-bold text-yellow-500 tracking-wider">RANOLPH</h1>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" className="bg-transparent border-gray-700">
              <Fullscreen className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-transparent border-gray-700">
              <Menu className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-transparent border-gray-700" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </header>
        <div className="flex">
          <aside className="w-24 bg-gradient-to-r from-gray-900 to-transparent p-4 space-y-4">
            <Button variant="ghost" className="w-full py-2 text-xs">ALL</Button>
            <Button variant="ghost" className="w-full py-2 text-xs">FAVORITE</Button>
            <Button variant="ghost" className="w-full py-2 text-xs">SLOTS</Button>
            <Button variant="ghost" className="w-full py-2 text-xs">FISHING</Button>
            <Button variant="ghost" className="w-full py-2 text-xs">OTHER</Button>
          </aside>
          <main className="flex-1 p-4">
            <div className="grid grid-cols-4 gap-4">
              <Card className="col-span-1 row-span-2 bg-gradient-to-b from-gray-800 to-gray-900 border-none overflow-hidden">
                <img 
                  src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9155926_b_v10_au.jpg" 
                  alt="Viking character" 
                  className="w-full h-full object-cover"
                />
              </Card>
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="aspect-video bg-gradient-to-b from-yellow-900 to-yellow-800 border-none p-2">
                  <img 
                    src="https://s3-alpha-sig.figma.com/img/f088/d54e/8eb2d90fca2ab0a83c249477fe2f4651?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mKMyU6nNn7idysMuhx46yFp9T57D4LIaGGBDg0OissnYZ5huUcp~0ZzLnHrfMb5eg5CGJstUo-ybVNOf6jeRAmR6kz2bQKhRO1LVJMO2OM9qI8NwjeFIiZIUP3TpGkPPZoh6CxX~JugUAaNOeLb2ihXj~U9JA8mnE6MGoi2tWQgRbiqu2TTK-TN5d4Nq5wZjs1OkF9-s5PWUoNulvw7C25aye2SPPW2IjwG0xvHtHa9lo2A7tStc~~eleDH70Xf8YbleADDzd8lud1~zYCl3A1tUN7O8jv6toUBOH6AjopKgvRcH68oQUsFR9frwV~iR7N9BeT8GAKGwgtugzqlBaQ__" 
                    alt={`Slot machine ${index + 1}`} 
                    className="w-full h-full object-cover rounded"
                  />
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
