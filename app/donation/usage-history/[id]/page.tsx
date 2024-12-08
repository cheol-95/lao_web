'use client';

import Link from 'next/link';
import Layout from '../../../components/Layout';
import { usageRecords } from '../data';
import { useParams } from 'next/navigation';

export default function UsageHistoryDetail () {
	const params = useParams();
	const id = Number(params.id);

	const recordDetails = usageRecords.find(record => record.id === id);
	const currentIndex = usageRecords.findIndex(record => record.id === id);

	const prevRecord = usageRecords[currentIndex + 1];
	const nextRecord = usageRecords[currentIndex - 1];

	if (!recordDetails) {
		return <div>Record not found</div>;
	}

	return (
		<Layout>
			<div className="container mx-auto px-4 py-8">
				<div className="max-w-4xl mx-auto">
					{/* 제목 */}
					<div className="border-b border-gray-200 pb-4">
						<h1 className="text-xl text-gray-800 mb-2">{recordDetails.title}</h1>
					</div>

					{/* 메타 정보 테이블 */}
					<div className="border-b border-gray-200">
						<table className="w-full">
							<tbody>
								<tr>
									<th className="py-4 px-4 text-left bg-gray-50 border-b border-gray-200 w-32 text-gray-700">등록일</th>
									<td className="py-4 px-4 border-b border-gray-200 text-gray-800">{recordDetails.date}</td>
								</tr>
								<tr>
									<th className="py-4 px-4 text-left bg-gray-50 border-b border-gray-200 w-32 text-gray-700">작성자</th>
									<td className="py-4 px-4 border-b border-gray-200 text-gray-800">{recordDetails.author}</td>
								</tr>
								<tr>
									<th className="py-4 px-4 text-left bg-gray-50 border-b border-gray-200 w-32 text-gray-700">연락처</th>
									<td className="py-4 px-4 border-b border-gray-200 text-gray-800">{recordDetails.phone}</td>
								</tr>
								<tr>
									<th className="py-4 px-4 text-left bg-gray-50 border-b border-gray-200 w-32 text-gray-700">이메일</th>
									<td className="py-4 px-4 border-b border-gray-200 text-gray-800">{recordDetails.email}</td>
								</tr>
							</tbody>
						</table>
					</div>

					{/* 내용 */}
					<div className="py-8 text-gray-800">
						<p className="whitespace-pre-wrap">{recordDetails.content}</p>
					</div>

					{/* 이전글/다음글 */}
					<div className="border-t border-b border-gray-200">
						<div className="flex border-b border-gray-200">
							<div className="w-32 py-4 px-4 bg-gray-50 text-gray-700">다음글</div>
							<div className="flex-1 py-4 px-4">
								{nextRecord ? (
									<Link href={`/donation/usage-history/${nextRecord.id}`} className="text-gray-800 hover:underline">
										{nextRecord.title}
									</Link>
								) : (
									<span className="text-gray-500">다음글이 없습니다.</span>
								)}
							</div>
						</div>
						<div className="flex">
							<div className="w-32 py-4 px-4 bg-gray-50 text-gray-700">이전글</div>
							<div className="flex-1 py-4 px-4">
								{prevRecord ? (
									<Link href={`/donation/usage-history/${prevRecord.id}`} className="text-gray-800 hover:underline">
										{prevRecord.title}
									</Link>
								) : (
									<span className="text-gray-500">이전글이 없습니다.</span>
								)}
							</div>
						</div>
					</div>

					{/* 버튼 */}
					<div className="mt-8 flex justify-end space-x-2">
						<Link
							href="/donation/usage-history"
							className="px-4 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors"
						>
							목록
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	);
}
