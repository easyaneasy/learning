import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound() {
    return (
        <>
            <div>페이지를 찾을 수 없습니다</div>
            <br />
            <Link to={'/'}>홈 페이지로 돌아가기</Link>
        </>
    )
}
