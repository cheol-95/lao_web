'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navigation () {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		if (href.startsWith('#')) {
			e.preventDefault();
			const element = document.querySelector(href);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
				setMobileMenuOpen(false);
			}
		}
	};

	return (
		<header className="sticky top-0 z-50 bg-[#00AC8F] border-b">
			<nav className="container mx-auto px-4 py-2">
				<div className="flex items-center justify-between">
					<Link href="/" className="flex items-center">
						<Image
							src="/logo_main.png"
							alt="메인 로고"
							width={200}
							height={53}
							className="h-14 w-auto"
						/>
					</Link>

					<div className="hidden md:flex items-center space-x-8">
						<Link
							href="#about"
							onClick={e => handleClick(e, '#about')}
							className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
						>
							조직소개
						</Link>
						<Link href="/#vision" className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded">비전</Link>
						<Link href="/#business" className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded">사업계획</Link>
						<Link href="/#organization" className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded">조직체계</Link>
						<Link href="/donation/annual-records" className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded">연간 기부금 모금액 내역</Link>
						<Link href="/donation/usage-history" className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded">활용 실적 내역</Link>
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
						<Link href="/#about" className="block py-2 text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-3" onClick={() => setMobileMenuOpen(false)}>조직소개</Link>
						<Link href="/#vision" className="block py-2 text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-3" onClick={() => setMobileMenuOpen(false)}>비전</Link>
						<Link href="/#business" className="block py-2 text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-3" onClick={() => setMobileMenuOpen(false)}>사업계획</Link>
						<Link href="/#organization" className="block py-2 text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-3" onClick={() => setMobileMenuOpen(false)}>조직체계</Link>
						<Link href="/donation/annual-records" className="block py-2 text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-3" onClick={() => setMobileMenuOpen(false)}>연간 기부금 모금액 내역</Link>
						<Link href="/donation/usage-history" className="block py-2 text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-3" onClick={() => setMobileMenuOpen(false)}>활용 실적 내역</Link>
					</div>
				)}
			</nav>
		</header>
	);
}
