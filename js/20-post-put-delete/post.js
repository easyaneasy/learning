import axios from "axios";

async function addProduct() {
    
    // 요청 URL
    const URL = "https://dummyjson.com/products/add";
    // 요청 방법
    const METHOD = "POST";
    // 요청 본문
    const body = {
        title: "갤럭시",
        category: "스마트폰"
    };

    // 요청 헤더
    // 헤더 : 요청의 부가 정보
    const headers = {
        // Content-Type : 요청 본문(body)의 데이터 형식
        // application/json : json 확장자 데이터
        "Content-Type" : "application/json",
    };

    // axios 요청 설정 파일
    const config = {
        url: URL,
        method: METHOD,
        headers: headers,
        data: body
    };

    // axios로 API 요청
    const res = await axios(config);

    // 데이터 객체 추출
    const data = res.data;

    console.log(data);
}

// 함수호출
addProduct();