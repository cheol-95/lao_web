'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bell, User, Menu } from 'lucide-react'

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-black">

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
              <Link href="#" className="text-white hover:text-[#3498db]">조직소개</Link>
              <Link href="#" className="text-white hover:text-[#3498db]">비전</Link>
              <Link href="#" className="text-white hover:text-[#3498db]">사업계획</Link>
              <Link href="#" className="text-white hover:text-[#3498db]">조직체계</Link>
              {/* <Link href="#" className="text-amber-900 hover:text-amber-700">순복음VOD</Link>
              <Link href="#" className="text-amber-900 hover:text-amber-700">교회학교</Link>
              <Link href="#" className="text-amber-900 hover:text-amber-700">상담/문의</Link> */}
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
              <Link href="#" className="block py-2 text-white hover:bg-[#34495e] rounded px-3">조직소개</Link>
              <Link href="#" className="block py-2 text-white hover:bg-[#34495e] rounded px-3">비전</Link>
              <Link href="#" className="block py-2 text-white hover:bg-[#34495e] rounded px-3">사업계획</Link>
              <Link href="#" className="block py-2 text-white hover:bg-[#34495e] rounded px-3">조직체계</Link>
              {/* <Link href="#" className="block py-2 text-amber-900 hover:text-amber-700">순복음VOD</Link>
              <Link href="#" className="block py-2 text-amber-900 hover:text-amber-700">교회학교</Link>
              <Link href="#" className="block py-2 text-amber-900 hover:text-amber-700">상담/문의</Link> */}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">라오브라더스</h1>

            {/* Global Brothers Vision section remains unchanged */}
            <div className="mt-12">
              {/* <h2 className="text-2xl font-bold mb-4">글로벌 브라더스 비전</h2> */}
              <div className="space-y-4">
                <p className="text-lg font-semibold">글로벌한 재능과 역량을 보유한 청년 인재 양성</p>
                <p className="text-sm md:text-base">불평등한 기회에 좌절하지 않고 다양한 가능성을 창출하여, 경제적 어려움이나 부족한 인맥 때문에 경험하지 못할 청소년과 청년 시기의 소중한 기회를 제공하여 세상 어디서든 빛을 발할 수 있는 자기주도적이고 책임감 있는 인격체로 성장하도록 지원합니다.</p>
                <p className="text-sm md:text-base">동남아시아 소수민족 청소년, 여성, 소외계층, 그리고 비인기 스포츠 종목 선수들에게 다양한 경험의 기회를 제공하여 이들이 사회적으로 가치 있는 존재로 성장할 수 있도록 돕습니다.</p>
                <p className="text-sm md:text-base">이를 바탕으로 세계 어디서든 다양성을 존중하며, 배려와 매너를 갖춘 글로벌 인재로 자리 잡는 것을 목표로 합니다.</p>
              </div>
            </div>

            {/* Main Purpose Business section remains unchanged */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">주요 목적사업</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: '야구', desc: '야구를 통한 글로벌 인재 양성' },
                  { title: '공동체 생활', desc: '함께하는 공동체 생활을 통한 라이프 스킬 습득' },
                  { title: '인재 양성', desc: '사회에 필요한 인재 양성' },
                  { title: '지원 사업', desc: '동남아시아 청소년, 소외계층, 여성, 소수민족, 비인기 스포츠 종목 운동선수들을 위한 자립과 자기 계발 및 창업지원 및 교육 지원' }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[600px] rounded-lg overflow-hidden mt-8 md:mt-0">
            <Image
              src="/라오스국기_단체사진.jpeg"
              alt="라오브라더스 메인"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </main>

      {/* Vision Sections */}
      <section className="py-12 md:py-20 bg-white">
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
              imageSrc="/야구장_단체.jpeg"
              imageAlt="이웃과 함께하는 모습"
              imageOnLeft={true}
            />

            <AnimatedSection
              title="주님의 은혜를"
              description="오중복음 삼중축복의 은혜가 넘칩니다."
              imageSrc="/타자.jpeg"
              imageAlt="성경을 읽는 모습"
              imageOnLeft={false}
            />

            <AnimatedSection
              title="세계선교를 향한"
              description="하나님의 일꾼으로서 복음을 전파합니다."
              imageSrc="/투수.jpeg"
              imageAlt="선교 활동 모습"
              imageOnLeft={true}
            />

            <AnimatedSection
              title="청년 인재 양성"
              description="글로벌 매너와 역량을 갖춘 청년 인재를 양성합니다."
              imageSrc="/승리.jpeg"
              imageAlt="청년 교육 프로그램"
              imageOnLeft={false}
            />
          </div>
        </div>
      </section>

      {/* 2025 Business Plan Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16">2025년 사업계획</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">주요사업 목표</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                <li>해외 저개발국가의 효율적 지원을 위한 연구, 조사</li>
                <li>해외 저개발국가의 글로벌 역량강화를 위한 교육사업 및 교육환경개선 지원사업</li>
                <li>해외 저개발국가 공동체, 문화체험 및 스포츠 교류 지원</li>
                <li>해외 저개발국가 생활지원 사업</li>
                <li>유관단체와의 협력사업</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">세부사업 내용</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "해외 저개발국가의 효율적 지원을 위한 연구, 조사",
                  "해외 저개발국가의 글로벌 역량강화를 위한 교육사업 및 교육환경개선 지원사업",
                  "해외 저개발국가 공동체, 문화체험 및 스포츠 교류 지원",
                  "해외 저개발국가 생활지원 사업",
                  "유관단체와의 협력사업"
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg md:text-xl font-semibold mb-2">{index + 1}. {item}</h4>
                    <p className="text-sm text-gray-600">각 사업에 대한 상세 내용, 시행 방법, 예산 등이 계획되어 있습니다.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Organization Structure Section */}
      <section className="py-12 md:py-20">
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
    </div>
  )
}
function AnimatedSection({ title, description, imageSrc, imageAlt, imageOnLeft }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const contentClass = `space-y-4 ${
    isVisible ? 'animate-fade-in-up' : 'opacity-0'
  }`

  const imageClass = `w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden ${
    isVisible ? 'animate-fade-in-side' : 'opacity-0'
  }`

  return (
    <div ref={sectionRef} className="flex flex-col md:flex-row gap-8 items-center">
      <div className={`${imageClass} md:w-1/2 ${imageOnLeft ? 'md:order-first' : 'md:order-last'}`}>
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className={`${contentClass} md:w-1/2 text-center md:text-left`}>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  )
}