import Link from 'next/link'
import Image from 'next/image'
import { Bell, User } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg"
              alt="서울숲순복음교회 로고"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-gray-900">교회소개</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">나눔커뮤니티</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">순복음소식</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">SFC TV방송</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">순복음VOD</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">교회학교</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">상담/문의</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button aria-label="알림" className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            <button aria-label="사용자 메뉴" className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl text-gray-600">Hallelujah</h2>
              <h1 className="text-4xl md:text-5xl font-bold">할렐루야!</h1>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                1962년 4월 8일 성수동에서 천막교회로 시작한 서울숲순복음교회는 하나님이 주신 인죽 복음화와 세계 선교라는 사명을 완수하기 위해 지금까지 믿음으로 전진, 또 전진해 왔습니다. 그리고 늘 영혼구원과 성령충만, 구제와 사랑 실천에 힘써 왔습니다.
              </p>
              <p>
                서울숲순복음교회가 이 같은 역사를 이루게 된 것은 오로지 성령님이 일하신 결과입니다. 올해도 변함없이 성령의 역사를 이어나가기 위해 하나님이 우리 교회에 주신 목표는 은혜와 진리가 충만한 교회, 사랑과 나눔으로 세상을 섬기는 교회, 새로운 부흥으로 나아가는 교회입니다. 이를 위해 모든 교역자와 성도들이 한마음, 한뜻이 되어 절대 긍정, 절대 감사의 믿음으로 힘차게 달려갈 것입니다.
              </p>
              <p>
                성도 여러분 한 사람 한 사람이 늘 성령충만하여 주님이 주신 꿈을 모두 이루시는 복된 한 해가 되시기를 바랍니다.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-medium">서울숲순복음교회 담임목사</p>
              <p className="text-xl font-bold">김도희</p>
            </div>

            <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
              담임목사 홈페이지 바로가기
            </button>

            {/* Added Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">글로벌 브라더스 비전</h2>
              <div className="space-y-4">
                <p className="text-lg">글로벌 매너와 역량을 보유한 청년 인재 양성</p>
                <p>불평등한 기회에 순응하지 않고 다양한 기회들을 창출하여 돈이 없어서 인맥이 없어서 마땅히 누려야할 청소년, 청년 시기의 다양 경험들을 하게 해 줌으로서 세상 어디에서도 빛을 낼 수 있는 자기 주도적 인격체로 성장시키고자 합니다.</p>
                <p>동남아시아 소민족 청소년, 여성과 소외계층과 비인기 스포츠 종목 선수들에게 다양한 기회를 통한 경험이 사회에 소중한 존재로 성장하여 세계 어느 곳에서도 다양성을 존중하며 배려와 매너를 겸비한 글로벌 구성원을 양성하는 그 목적이 있습니다.</p>
              </div>
            </div>

            {/* Added Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">주요 목적사업</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: '야구', desc: '야구를 통한 글로벌 인재 양성' },
                  { title: '공동체 생활', desc: '함께하는 공동체 생활을 통한 라이프 스킬 습득' },
                  { title: '인재 양성', desc: '사회에 필요한 인재 양성' },
                  { title: '지원 사업', desc: '동남아시아 청소년, 소외계층, 여성, 소수민족, 비인기 스포츠 종목 운동선수들을 위한 자립과 자기 계발 및 창업지원 및 교육 지원' }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="교회 건물과 십자가"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}