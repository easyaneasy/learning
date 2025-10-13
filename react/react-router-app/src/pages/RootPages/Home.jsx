import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1 className='text-2xl font-bold'>홈페이지</h1>
        {/* to 속성 : 어떤 주소로 이동할것인지 */}
        <Link to="/">홈</Link>
        <br />
        <Link to="/about">소개</Link>
        <br />
        <Link to="/profile">사용자 정보</Link>
        <br />
        {/* <a href="https://www.naver.com">외부 서비스 이동</a> */}
    </div>
  )
}
