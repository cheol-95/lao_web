import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
            <Link href="#about" className="text-white hover:text-[#3498db]">조직소개</Link>
            <Link href="#vision" className="text-white hover:text-[#3498db]">비전</Link>
            <Link href="#business" className="text-white hover:text-[#3498db]">사업계획</Link>
            <Link href="#organization" className="text-white hover:text-[#3498db]">조직체계</Link>
            <Link href="/donation/annual-records" className="text-white hover:text-[#3498db]">연간 기부금 모금액 내역</Link>
            <Link href="/donation/usage-history" className="text-white hover:text-[#3498db]">활용 실적 내역</Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* <button aria-label="알림" className="p-2 hover:bg-[#34495e] rounded-full">
              <Bell className="h-5 w-5 text-white" />
            </button> */}
            {/* <button aria-label="사용자 메뉴" className="p-2 hover:bg-[#34495e] rounded-full">
              <User className="h-5 w-5 text-white" />
            </button> */}
            <button 
              className="md:hidden p-2 hover:bg-[#34495e] rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 bg-[#2C3E50] p-4 rounded-b-lg">
            <Link href="#about" className="block py-2 text-white hover:bg-[#34495e] rounded px-3" onClick={() => setMobileMenuOpen(false)}>조직소개</Link>
            <Link href="#vision" className="block py-2 text-white hover:bg-[#34495e] rounded px-3" onClick={() => setMobileMenuOpen(false)}>비전</Link>
            <Link href="#business" className="block py-2 text-white hover:bg-[#34495e] rounded px-3" onClick={() => setMobileMenuOpen(false)}>사업계획</Link>
            <Link href="#organization" className="block py-2 text-white hover:bg-[#34495e] rounded px-3" onClick={() => setMobileMenuOpen(false)}>조직체계</Link>
            <Link href="/donation/annual-records" className="block py-2 text-white hover:bg-[#34495e] rounded px-3" onClick={() => setMobileMenuOpen(false)}>연간 기부금 모금액 내역</Link>
            <Link href="/donation/usage-history" className="block py-2 text-white hover:bg-[#34495e] rounded px-3" onClick={() => setMobileMenuOpen(false)}>활용 실적 내역</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
