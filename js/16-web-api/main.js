// axios : 브라우저와 Node.js 환경에서 HTTP 요청을 쉽게 보낼 수 있게 해주는 라이브러리이다.

// axios 불러오기
import axios from "axios";

// async / await 
// async를 통해 비동기 함수라는 것을 나타낸다
async function connectTest(){
    // axios.get(URL) : 데이터 요청에 대한 응답 데이터를 반환(생성)
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    
    console.log(response["data"]);

    // 어떤 키를 가지고 있는지 각 키에는 어떤 value들을 가지고있는지 확인
    // console.table(Object.keys(response)); 
}

// 함수 호출
connectTest();