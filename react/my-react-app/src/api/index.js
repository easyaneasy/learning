import axios from "axios";

const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

// create() : axios 객체 데이터를 생성
// 객체 : 속성 (key-value) 구성된 자료형 

// 아래 axiosInstance 변수로 요청을 보내면
// 기본 주소 : https://api.themoviedb.org/3
// 헤더에는 인증 정보가 설정되어 요청이 간다.
const axiosInstance = axios.create({
    // axios 객체가 가질 속성의 정보
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`
    },
    params: {
        language: "ko-KR"
    },
    timeout: 5000
});

// 응답 인터셉터 : 서버가 사용자에게 돌려주는 응답 데이터를 가로채서 추가 작업을 수행한다.
axiosInstance.interceptors.response.use(
    // 2개의 함수 전달
    // 통신 (요청-응답)이 성공했을때의 화살표함수
    // 매개변수 response
    (response) => {
        console.log("통신 성공 응답 인터셉터");
        
        // 응답 데이터 반환
        return response.data;
    },
    // 통신 (요청-응답)이 실패했을때의 화살표함수
    (error) => {
        if(error.response){
            if(error.response.status === 401){
                alert("인증에 문제가 있습니다");
            }else if(error.response.status === 404){
                alert("Not Found");
            }


        }
        return Promise.reject(error);
    }
)


export default axiosInstance;