'use client'

import { useState } from 'react'
import Layout from '../../components/Layout'

export default function AnnualDonationRecords() {
  const records = [
    {
      id: 3,
      title: '공익법인 경기음악연구회 2023 기부금 모금액 내역(출연재산 없음)',
      author: '사단법인 경기음악연구회',
      views: 15,
      date: '2024-10-02'
    },
    {
      id: 2,
      title: '공익법인 경기음악연구회 2022 기부금 모금액 내역(출연재산 없음)',
      author: '사단법인 경기음악연구회',
      views: 460,
      date: '2023-08-23'
    },
    {
      id: 1,
      title: '공익법인 경기음악연구회 2021 기부금 모금액 내역(출연재산 없음)',
      author: '사단법인 경기음악연구회',
      views: 187,
      date: '2022-03-31'
    }
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">연간 기부금 모금액 내역</h1>
        
        <div className="overflow-x-auto">
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
                  <td className="px-6 py-4 border-b text-gray-800">{record.title}</td>
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
