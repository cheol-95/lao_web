'use client'

import { useState } from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'

export default function DonationUsageHistory() {
  const records = [
    {
      id: 1,
      title: '2023년 기부금 활용 실적 내역',
      author: '사단법인 경기음악연구회',
      views: 25,
      date: '2024-03-15'
    }
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">기부금 활용 실적 내역</h1>
        
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {records.map((record) => (
            <div key={record.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-800 font-semibold">번호: {record.id}</span>
                <span className="text-gray-600 text-sm">{record.date}</span>
              </div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">{record.title}</h2>
              <p className="text-gray-600 mb-2">글쓴이: {record.author}</p>
              <p className="text-gray-600">조회수: {record.views}</p>
              <Link href={`/donation/usage-history/${record.id}`} className="hover:text-blue-600 hover:underline">
                더보기
              </Link>
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
              {records.map((record) => (
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
  )
}
