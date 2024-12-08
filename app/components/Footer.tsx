import Image from 'next/image';
import Link from 'next/link';

export default function Footer () {
	return (
		<footer className="bg-[#404042] text-white mt-20">
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Organization Info */}
					<div className="space-y-4">
						<Image
							src="/logo_main.png"
							alt="라오브라더스 로고"
							width={150}
							height={40}
							className="h-10 w-auto"
						/>
						<div className="space-y-2 text-sm">
							<p>주소: 서울특별시 중랑구 동일로 129길 35, 2층 215-24호</p>
							<p>전화: 010-4709-1328</p>
							<p>이메일: innae75@gmail.com</p>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">바로가기</h3>
						<ul className="space-y-2 text-sm">
							<li><Link href="#about" className="hover:text-[#3498db]">조직소개</Link></li>
							<li><Link href="#vision" className="hover:text-[#3498db]">비전</Link></li>
							<li><Link href="#business" className="hover:text-[#3498db]">사업계획</Link></li>
							<li><Link href="#organization" className="hover:text-[#3498db]">조직체계</Link></li>
						</ul>
					</div>

					{/* Social Links */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">소셜 미디어</h3>
						<div className="flex space-x-4">
							<a href="https://www.facebook.com/laojbrothers" className="hover:text-[#3498db]" aria-label="Facebook">
								<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z"></path>
								</svg>
							</a>
							{/* <a href="https://www.facebook.com/100039441413924/" className="hover:text-[#3498db]" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z"></path>
                </svg>
              </a> */}
							<a href="https://www.youtube.com/@laojbrothers" className="hover:text-[#3498db]" aria-label="YouTube">
								<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm">
					<p>&copy; {new Date().getFullYear()} 라오브라더스. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
