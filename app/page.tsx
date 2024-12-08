'use client';

// import { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import InfiniteScrollCards from './components/InfiniteScrollCards';
import AnimatedSection from './components/AnimatedSection';

export default function Component () {
	// const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<div id="about"className="min-h-screen bg-white text-black">

			{/* Navigation */}
			<Navigation />

			{/* Main Content */}
			<main className="container mx-auto px-4 py-8 md:py-12">
				<div className="grid md:grid-cols-2 gap-8 items-center">
					<div className="space-y-6 order-2 md:order-1">

						<section className="py-12 md:py-2 bg-white">
							<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">라오브라더스</h1>

							{/* Global Brothers Vision section remains unchanged */}
							<div className="mt-12">
								{/* <h2 className="text-2xl font-bold mb-4">글로벌 브라더스 비전</h2> */}
								<div className="space-y-4">
									<h2 className="text-2xl font-bold mb-4">글로벌한 재능과 역량을 보유한 청년 인재 양성</h2>
									<p className="text-sm md:text-base">불평등한 기회에 좌절하지 않고 다양한 가능성을 창출하여, 경제적 어려움이나 부족한 인맥 때문에 경험하지 못할 청소년과 청년 시기의 소중한 기회를 제공하여 세상 어디서든 빛을 발할 수 있는 자기주도적이고 책임감 있는 인격체로 성장하도록 지원합니다.</p>
									<p className="text-sm md:text-base">동남아시아 소수민족 청소년, 여성, 소외계층, 그리고 비인기 스포츠 종목 선수들에게 다양한 경험의 기회를 제공하여 이들이 사회적으로 가치 있는 존재로 성장할 수 있도록 돕습니다.</p>
									<p className="text-sm md:text-base">이를 바탕으로 세계 어디서든 다양성을 존중하며, 배려와 매너를 갖춘 글로벌 인재로 자리 잡는 것을 목표로 합니다.</p>
								</div>
							</div>

							{/* Group Image for Mobile */}
							<div className="block md:hidden relative h-[300px] rounded-lg overflow-hidden mt-8">
								<Image
									src="/laos_group.jpeg"
									alt="라오브라더스 메인"
									fill
									className="object-cover"
									priority
								/>
							</div>

							{/* Main Purpose Business section */}
							<div className="space-y-6">
								<h2 className="text-2xl font-bold mb-4">주요 목적사업</h2>
								<div className="grid sm:grid-cols-2 gap-6">
									{[
										// { title: '지원 사업', desc: '동남아시아 청소년, 소외계층, 여성, 소수민족, 비인기 스포츠 종목 운동선수들을 위한 자립과 자기 계발 및 창업지원 및 교육 지원' },
										// { "title": "야구", // "desc": "야구에 대한 열정과 꿈을 가진 이들에게 기회를 제공하여 꿈을 키우고 미래를 열어갈 수 있도록 함께하는 것이 우리의 목표입니다",
										//   "desc": "야구에 대한 열정과 꿈을 가진 이들에게 기회를 제공하여 꿈을 키우고 미래를 열어갈 수 있는 환경 지원",
										// },
										// { title: '공동체 생활', desc: '함께하는 공동체 생활을 통한 라이프 스킬 습득' },
										// { title: '인재 양성', desc: '사회에 필요한 인재 양성' }
										{ title: '지원 사업', desc: '동남아시아 청소년, 소외계층, 여성, 소수민족, 비인기 스포츠 종목 운동선수들을 위한 자립과 자기 계발 및 창업지원 및 교육을 지원합니다.' },
										{ title: '야구',
											desc: '야구에 대한 열정과 꿈을 가진 이들에게 기회를 제공하여 꿈을 키우고 미래를 열어갈 수 있도록 함께하는 것이 우리의 목표입니다',
											// desc: "야구에 대한 열정과 꿈을 가진 이들에게 기회를 제공하여 자립과 자기 계발을 돕습니다.",
										},
										{ title: '공동체 생활', desc: '함께하는 공동체 생활을 통해 라이프 스킬을 습득할 수 있도록 지원합니다.' },
										{ title: '인재 양성', desc: '사회에 필요한 인재를 양성합니다.' }

										// {
										//   "지원 사업": "동남아시아 청소년, 소외계층, 여성, 소수민족, 비인기 스포츠 종목 운동선수들을 위한 자립과 자기 계발 및 창업지원 및 교육 지원",
										//   "야구": "야구에 대한 열정과 꿈을 가진 이들에게 기회를 제공하여 자립과 자기 계발을 돕습니다.",
										//   "공동체 생활": "함께하는 공동체 생활을 통해 라이프 스킬을 습득할 수 있도록 지원합니다.",
										//   "인재 양성": "사회에 필요한 인재를 양성합니다."
										// }
									].map((item, i) => (
										<div key={i} className="bg-[#E6F7F4] p-4 rounded-lg shadow-sm hover:bg-[#CCF0EA] transition-colors duration-200">
											<h3 className="text-lg font-bold mb-2 text-[#00AC8F]">{item.title}</h3>
											<p className="text-sm text-gray-600">{item.desc}</p>
										</div>
									))}
								</div>
							</div>
						</section>
					</div>

					{/* Group Image for Desktop */}
					<div className="hidden md:block relative h-[600px] rounded-lg overflow-hidden mt-8 md:mt-0">
						<Image
							src="/laos_group.jpeg"
							alt="라오브라더스 메인"
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>
			</main>

			{/* Vision Sections */}
			<section id="vision" className="py-12 md:py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="space-y-20">
						{/* Vision */}
						<div className="text-center space-y-4">
							<h2 className="text-3xl font-bold">비전</h2>
							<div className="w-12 h-1 bg-gray-800 mx-auto"></div>
							<p className="text-lg">라오브라더스 오순절 성령운동을 전세계에 펼칩니다.</p>
						</div>

						<AnimatedSection
							title="이웃과 함께"
							description="불우한 이웃과 함께하며 사랑을 실천합니다."
							imageSrc="/baseball_field_group.jpeg"
							imageAlt="이웃과 함께하는 모습"
							imageOnLeft={true}
						/>
						{/*
            <AnimatedSection
              title="주님의 은혜를"
              description="오중복음 삼중축복의 은혜가 넘칩니다."
              imageSrc="/Hitter.jpeg"
              imageAlt="성경을 읽는 모습"
              imageOnLeft={false}
            />

            <AnimatedSection
              title="세계선교를 향한"
              description="하나님의 일꾼으로서 복음을 전파합니다."
              imageSrc="/Pitcher.jpeg"
              imageAlt="선교 활동 모습"
              imageOnLeft={true}
            /> */}

						<AnimatedSection
							title="청년 인재 양성"
							description="글로벌 매너와 역량을 갖춘 청년 인재를 양성합니다."
							imageSrc="/Victory.jpeg"
							imageAlt="청년 교육 프로그램"
							imageOnLeft={false}
						/>
					</div>
				</div>
			</section>

			{/* 2025 Business Plan Section */}
			<section id="business" className="py-12 md:py-20 bg-[#E6F7F4]">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16 text-[#00AC8F]">2025년 사업계획</h2>
					<InfiniteScrollCards />
				</div>
			</section>

			{/* Organization Structure Section */}
			<section id="organization" className="py-12 md:py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16">조직체계</h2>
					<div className="space-y-8">
						<p className="text-sm md:text-base">임원(이사장, 이사, 감사), 회원, 사무국(국장 및 직원)으로 구성</p>

						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							<div className="bg-white p-6 rounded-lg shadow-sm">
								<h3 className="text-xl font-semibold mb-4">이사장</h3>
								<p className="text-sm md:text-base">제상욱 이사장 (현 라오스 야구 소프트볼 연맹 부회장)</p>
							</div>

							<div className="bg-white p-6 rounded-lg shadow-sm">
								<h3 className="text-xl font-semibold mb-4">이사 및 감사</h3>
								<ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
									<li>이승복 이사 (현 인천교육청 교육이음 센터장)</li>
									<li>강인용 이사 (현 아바드테크(주) 대표)</li>
									<li>우영덕 이사 (현 티엔티리써치 지속가능발전 센터장)</li>
									<li>배경열 이사 (현 커피빈스 대표)</li>
									<li>임재원 감사 (현 라오스 야구 국가대표팀 단장)</li>
								</ul>
							</div>

							<div className="bg-white p-6 rounded-lg shadow-sm">
								<h3 className="text-xl font-semibold mb-4">회원</h3>
								<p className="text-sm md:text-base">일반회원 100명</p>
							</div>

							<div className="bg-white p-6 rounded-lg shadow-sm">
								<h3 className="text-xl font-semibold mb-4">사무국</h3>
								<p className="text-sm md:text-base">사업 및 예산 운영 실무</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}
