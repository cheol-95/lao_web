'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bell, User, Menu } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#2C3E50] border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo_main.png"
                alt="메인 로고"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#about" className="text-white hover:text-[#3498db]">조직소개</Link>
              <Link href="/#vision" className="text-white hover:text-[#3498db]">비전</Link>
              <Link href="/#business" className="text-white hover:text-[#3498db]">사업계획</Link>
              <Link href="/#organization" className="text-white hover:text-[#3498db]">조직체계</Link>
              <Link href="/donation/annual-records" className="text-white hover:text-[#3498db]">연간 기부금 모금액 내역</Link>
              <Link href="/donation/usage-history" className="text-white hover:text-[#3498db]">활용 실적 내역</Link>
            </div>

            <div className="flex items-center space-x-4">
              <button aria-label="알림" className="p-2 hover:bg-[#34495e] rounded-full">
                <Bell className="h-5 w-5 text-white" />
              </button>
              <button aria-label="사용자 메뉴" className="p-2 hover:bg-[#34495e] rounded-full">
                <User className="h-5 w-5 text-white" />
              </button>
              <button 
                className="md:hidden p-2 hover:bg-[#34495e] rounded-full"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 bg-[#2C3E50] p-4 rounded-b-lg">
              <Link href="/#about" className="block py-2 text-white hover:bg-[#34495e] rounded px-3" onClick={() => setMobileMenuOpen(false)}>조직소개</Link>
              <Link href="/#vision" className="block py-2 text-white hover:bg-[#34495e] rounded px-3" onClick={() => setMobileMenuOpen(false)}>비전</Link>
              <Link href="/#business" className="block py-2 text-white hover:bg-[#34495e] rounded px-3" onClick={() => setMobileMenuOpen(false)}>사업계획</Link>
              <Link href="/#organization" className="block py-2 text-white hover:bg-[#34495e] rounded px-3" onClick={() => setMobileMenuOpen(false)}>조직체계</Link>
              <Link href="/donation/annual-records" className="block py-2 text-white hover:bg-[#34495e] rounded px-3" onClick={() => setMobileMenuOpen(false)}>연간 기부금 모금액 내역</Link>
              <Link href="/donation/usage-history" className="block py-2 text-white hover:bg-[#34495e] rounded px-3" onClick={() => setMobileMenuOpen(false)}>활용 실적 내역</Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">연락처</h3>
              <p>전화: 010-3048-2114</p>
              <p>이메일: gyeongigugak@naver.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">주소</h3>
              <p>경기도 성남시 분당구</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">소셜 미디어</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#3498db]">Facebook</a>
                <a href="#" className="hover:text-[#3498db]">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2024 라오브라더스. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
