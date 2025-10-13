// Navigete 컴포넌트 불러오기
import { Navigate } from 'react-router-dom';
// useNavigate 훅
import { useNavigate } from 'react-router-dom';


export default function Profile() {
    // 로그인 상태 표시 가정용 변수
    const isLogin = true;

    // 로그인 상태가 아니라면
    // "/"주소로 리다이렉트
    if(isLogin === false){
        // Navigate는 컴포넌트라서 return 내부에 있어야한다
        // replace : history에 쌓이지않는다
        return <Navigate to="/" replace></Navigate>;
    }

    const navigate = useNavigate();

    return (
        <div>
            <h1>사용자 정보</h1>
            {/* onClickf 속성에서 navigate 함수로 "/" 이동시키기 */}
            <button
                className='border p-2 cursor-pointer'
                onClick={() => {
                    alert("홈페이지로 이동합니다");
                    // 페이지 이동 전 특정 로직을 수행할 때 사용
                    navigate("/");
                }}>홈페이지로 이동
            </button>
        </div>
    )
}
