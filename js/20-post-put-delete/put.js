import axios from "axios";

async function putProduct(){

    // axios 설정 객체 config
    const config = {
        url: "https://dummyjson.com/products/1",
        method: "put",
        headers: {"Content-Type": "application/json"},
        data: {
            title: "아이폰",
        },
    }
    // 응답 데이터 저장
    const res = await axios(config);
    // 응답 데이터에서 data 속성 추출
    const data = res.data;

    console.log(data)
}
// 함수 호출
putProduct();