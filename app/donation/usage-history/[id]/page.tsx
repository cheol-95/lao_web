'use client'

import { useParams } from 'next/navigation'
import Layout from '../../../components/Layout'

export default function UsageHistoryDetail() {
  const params = useParams()
  const id = params.id

  // 실제로는 API나 데이터베이스에서 가져와야 하는 데이터입니다
  const recordDetails = {
    title: '2023년 기부금 활용 실적 내역',
    date: '2024-03-15 14:30:00',
    author: '사단법인 경기음악연구회',
    phone: '010-3048-2114',
    email: 'gyeongigugak@naver.com',
    content: '2023년도 기부금 활용 실적이 없음을 알려드립니다.'
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
              <div className="flex-1 py-4 px-4 text-gray-500">다음글이 없습니다.</div>
            </div>
            <div className="flex">
              <div className="w-32 py-4 px-4 bg-gray-50 text-gray-700">이전글</div>
              <div className="flex-1 py-4 px-4 text-gray-500">이전글이 없습니다.</div>
            </div>
          </div>

          {/* 버튼 */}
          <div className="mt-8 flex justify-end space-x-2">
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors"
            >
              목록
            </button>
            <button
              className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
            >
              삭제
            </button>
            <button
              className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
            >
              수정
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
