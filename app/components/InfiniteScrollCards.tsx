'use client';

import { useState, useRef, useEffect } from 'react';

export default function InfiniteScrollCards () {
	const cards = getCards();

	// 복제된 배열 생성
	const extendedCards = [...cards, ...cards, ...cards];
	const [currentIndex, setCurrentIndex] = useState(cards.length);
	const cardWidth = 320;
	const containerRef = useRef<HTMLDivElement>(null);
	const isTransitioning = useRef(false);

	useEffect(() => {
		// 중앙으로 스크롤 설정 (처음 렌더링 시)
		if (containerRef.current) {
			containerRef.current.scrollLeft = cards.length * (cardWidth + 16);
		}
	}, []);

	const handlePrev = () => {
		if (isTransitioning.current || !containerRef.current) return;

		isTransitioning.current = true;
		setCurrentIndex(prev => prev - 1);

		setTimeout(() => {
			if (currentIndex - 1 < cards.length) {
				// 애니메이션 없이 중앙으로 이동
				containerRef.current!.style.transition = 'none';
				containerRef.current!.scrollLeft =
					(cards.length + cards.length - 1) * (cardWidth + 16);

				// 애니메이션 복원
				setTimeout(() => {
					containerRef.current!.style.transition = '';
					isTransitioning.current = false;
				}, 50);
				setCurrentIndex(cards.length + cards.length - 1);
			} else {
				isTransitioning.current = false;
			}
		}, 650); // 애니메이션 지속 시간
	};

	const handleNext = () => {
		if (isTransitioning.current || !containerRef.current) return;

		isTransitioning.current = true;
		setCurrentIndex(prev => prev + 1);

		setTimeout(() => {
			if (currentIndex + 1 >= cards.length * 2) {
				// 애니메이션 없이 중앙으로 이동
				containerRef.current!.style.transition = 'none';
				containerRef.current!.scrollLeft = cards.length * (cardWidth + 16);

				// 애니메이션 복원
				setTimeout(() => {
					containerRef.current!.style.transition = '';
					isTransitioning.current = false;
				}, 50);
				setCurrentIndex(cards.length);
			} else {
				isTransitioning.current = false;
			}
		}, 650); // 애니메이션 지속 시간
	};

	return (
		<div className="relative overflow-hidden pb-4">
			<div
				ref={containerRef}
				className="flex space-x-4 transition-transform duration-700 ease-in-out"
				style={{
					transform: `translateX(-${currentIndex * (cardWidth + 16)}px)`,
				}}
			>
				{extendedCards.map((item, index) => (
					<CardContainer key={`card-${index}`} index={index} item={item.title} desc={item.desc} />
				))}
			</div>
			<button
				className="absolute left-4 bottom-4 bg-white bg-opacity-50 p-2 rounded-full"
				onClick={handlePrev}
			>
				◀
			</button>
			<button
				className="absolute right-4 bottom-4 bg-white bg-opacity-50 p-2 rounded-full"
				onClick={handleNext}
			>
				▶
			</button>
		</div>
	);
}

function CardContainer ({ index, item, desc }: { index: number; item: string; desc: string }) {
	return (
		<div className="relative flex-shrink-0 w-80 h-80 bg-transparent">
			<div
				className={`absolute w-full p-4 md:p-6 rounded-lg shadow-sm bg-[#00AC8F] text-white hover:bg-[#2bbaa2] transition-colors duration-200 ${
					index % 2 === 0 ? 'top-0' : 'bottom-0'
				}`}
				style={{
					width: '100%',
				}}
			>
				<h4 className="text-lg md:text-xl font-semibold mb-2">{item}</h4>
				<p className="text-sm whitespace-pre-line">{desc}</p>
			</div>
		</div>
	);
}

function getCards () {
	return [
		{
			title: '기술과 혁신을 활용한 지원',
			desc: `
        디지털 기기(태블릿, 스마트폰) 보급 및 원격 학습 시스템 구축
        데이터 기반의 효율적인 구호 물품 배분 시스템 개발
        저개발국가에서 사용할 수 있는 적정 기술 제품 연구 및 배포
        예상 효과: 지속 가능하고 체계적인 지원을 통해 수혜자들의 교육 기회와 생활 환경을 개선`
		},
		{
			title: '문화 다양성 존중을 위한 프로그램',
			desc: `
        한국과 저개발국가 간의 음식, 예술, 스포츠 등의 문화 교류 행사
        다양한 문화권의 역사와 가치를 이해하는 워크숍 및 체험
        예상 효과: 문화적 이해를 바탕으로 상호 존중과 협력 증대
      `
		},
		{
			title: '자립 기반 조성 프로젝트',
			desc: `
        소규모 창업 지원 (예: 카페, 농산물 가공)
        전문 기술 교육 프로그램 (바리스타, 재봉, IT 교육 등)
        여성 및 청소년을 대상으로 한 경제활동 참여 지원
        예상 효과: 수혜자들의 경제적 자립을 통해 장기적인 삶의 질 향상`
		},
		{
			title: '청년 리더십 개발 프로그램',
			desc: `
        글로벌 리더십 캠프 개최 (지역 문제 해결 워크숍 포함)
        멘토링 프로그램: 국제 전문가와 청년 간의 정기적인 코칭
        프로젝트 기반 학습: 지역 사회 문제를 해결하기 위한 팀 프로젝트 진행
        예상 효과: 지역사회 발전을 위한 미래 지도자 양성 및 글로벌 협력 강화`
		},
		{
			title: '디지털 금융 교육 및 자금 지원',
			desc: `
        디지털 금융 교육 (모바일 뱅킹, 간편 결제 등)
        마이크로 크레딧 제공: 소규모 창업 자금을 저리로 대출
        금융 기술(FinTech)을 활용한 투명한 자금 관리 시스템 구축
        예상 효과: 금융 접근성을 높이고 소규모 창업 및 경제 활동 촉진`
		},
		{
			title: '글로벌 네트워크 플랫폼 구축',
			desc: `
        온라인 플랫폼 개발: 프로젝트 진행 현황 및 성과 공유
        각국의 비영리 단체 및 기관과의 협력 네트워크 강화
        베스트 프랙티스 공유를 위한 국제 포럼 개최
        예상 효과: 글로벌 협력 강화 및 사업 효과 극대화`
		},
		{
			title: '창의적 문화 콘텐츠 개발 및 보급',
			desc: `
        지역 전통 문화와 예술을 디지털화하여 글로벌 시장에 배포
        지역 예술가와 협력하여 상품화 가능한 콘텐츠 개발 (예: 수공예품, 디지털 아트)
        문화적 가치 확산을 위한 다큐멘터리 제작 및 홍보
        예상 효과: 문화 보존과 경제적 기회 창출`
		},
		{
			title: '스포츠를 통한 국제 연대 강화',
			desc: `
        국제 스포츠 대회 개최: 지역별 청소년 스포츠 대회 조직
        전문 스포츠 코치 초청 및 훈련 프로그램 제공
        스포츠 장비 기부 및 지역별 스포츠 리그 운영 지원
        예상 효과: 지역 청소년의 신체적, 정신적 성장과 국제적 네트워크 형성`
		},
	].map((item, index) => ({ ...item, title: `${index + 1}. ${item.title}` }));
}
