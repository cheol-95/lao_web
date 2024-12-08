'use client';

import { useState, useRef, useEffect } from 'react';

export default function InfiniteScrollCards () {
	const cards = ['1', '2', '3', '4', '5', '6', '7', '8'];

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
					<CardContainer key={`card-${index}`} index={index} item={item} />
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

function CardContainer ({ index, item }: { index: number; item: string }) {
	return (
		<div className="relative flex-shrink-0 w-80 h-60 bg-transparent">
			<div
				className={`absolute w-full p-4 md:p-6 rounded-lg shadow-sm bg-[#00AC8F] text-white hover:bg-[#2bbaa2] transition-colors duration-200 ${
					index % 2 === 0 ? 'top-0' : 'bottom-0'
				}`}
				style={{
					width: '100%',
				}}
			>
				<h4 className="text-lg md:text-xl font-semibold mb-2">{item}</h4>
				<p className="text-sm text-white">
					각 사업에 대한 상세 내용, 시행 방법, 예산 등이 계획되어 있습니다. 해당 섹션의 제목과 내용은 추후 변경될 예정입니다.
				</p>
			</div>
		</div>
	);
}
