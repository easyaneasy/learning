import {NavLink} from 'react-router-dom'

export default function About() {
    
    return (
        <div>
            <h1 className='text-2xl font-bold'>소개 페이지</h1>
            <NavLink 
                to="/" 
                className={({isActive}) => {
                    return isActive ? "text-red-600 font-bold text-5xl" : "";
                }}>
                홈
            </NavLink>
            <br />
            <NavLink 
                to="/about"
                className={({isActive}) => {
                    return isActive ? "text-red-600 font-bold text-5xl" : "";
                }}>
                소개
            </NavLink>
            <br />
            <NavLink to="/profile">사용자 정보</NavLink>
        </div>
    )
}

