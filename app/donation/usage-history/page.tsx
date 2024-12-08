'use client';

import Layout from '../../components/Layout';
import Link from 'next/link';
import { usageRecords } from './data';

export default function DonationUsageHistory () {
	return (
		<Layout>
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-2xl font-bold mb-6 text-gray-800">기부금 활용 실적 내역</h1>

				<div className="grid grid-cols-1 gap-4 md:hidden">
					{usageRecords.map(record => (
						<div key={record.id} className="bg-white p-4 rounded-lg shadow">
							<div className="mb-2">
								<span className="text-sm text-gray-500">번호: </span>
								<span className="text-gray-800">{record.id}</span>
							</div>
							<div className="mb-2">
								<Link href={`/donation/usage-history/${record.id}`} className="text-gray-800 hover:text-blue-600 hover:underline font-medium">
									{record.title}
								</Link>
							</div>
							<div className="mb-2">
								<span className="text-sm text-gray-500">글쓴이: </span>
								<span className="text-gray-800">{record.author}</span>
							</div>
							<div className="mb-2">
								<span className="text-sm text-gray-500">조회수: </span>
								<span className="text-gray-800">{record.views}</span>
							</div>
							<div>
								<span className="text-sm text-gray-500">등록일: </span>
								<span className="text-gray-800">{record.date}</span>
							</div>
						</div>
					))}
				</div>

				<div className="hidden md:block overflow-x-auto">
					<table className="min-w-full bg-white border border-gray-300">
						<thead>
							<tr className="bg-gray-100">
								<th className="px-6 py-3 border-b text-left text-gray-800 font-semibold">번호</th>
								<th className="px-6 py-3 border-b text-left text-gray-800 font-semibold">제목</th>
								<th className="px-6 py-3 border-b text-left text-gray-800 font-semibold">글쓴이</th>
								<th className="px-6 py-3 border-b text-left text-gray-800 font-semibold">조회수</th>
								<th className="px-6 py-3 border-b text-left text-gray-800 font-semibold">등록일</th>
							</tr>
						</thead>
						<tbody>
							{usageRecords.map(record => (
								<tr key={record.id} className="hover:bg-gray-50">
									<td className="px-6 py-4 border-b text-gray-800">{record.id}</td>
									<td className="px-6 py-4 border-b text-gray-800">
										<Link href={`/donation/usage-history/${record.id}`} className="hover:text-blue-600 hover:underline">
											{record.title}
										</Link>
									</td>
									<td className="px-6 py-4 border-b text-gray-800">{record.author}</td>
									<td className="px-6 py-4 border-b text-gray-800">{record.views}</td>
									<td className="px-6 py-4 border-b text-gray-800">{record.date}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Layout>
	);
}
