import axios from "axios";

// 도메인 주소
const BASE_URL = "https://dummyjson.com";

// async 화살표 함수
const testRoute = async () => {
    /*
    fetch('https://dummyjson.com/test')
    .then(res => res.json())
    .then(data => console.log(data));
    */

    const data = await axios.get(`${BASE_URL}/test`);
    console.log(data["data"]);
    // { status: 'ok', method: 'GET' }
    // 통신 준비가 되었다는 의미
}
//testRoute();

// 모든 상품 목록 가져오기
async function getAllProducts() {
    const response = await axios.get(`${BASE_URL}/products`);
    const data = response["data"];
    //console.log(response["data"]);
    //console.table(Object.entries(response["data"]));

    // products에 접근해서 상품목록 배열 출력
    const products = data["products"];
    console.log(products);
}
// getAllProducts();

// 단일 상품 조회
// n번 상품 조회
async function getProductById(n){
    const res = await axios.get(`${BASE_URL}/products/${n}`);
    const data = res["data"];
    console.log(data);
}
//getProductById(1);

// 특정 상품 조회
// 쿼리 파라미터 사용
async function searchProducts(search){
    const queryParams = new URLSearchParams({ q: search });
    const res = await axios.get(`${BASE_URL}/products/${queryParams}`);
    const data = res["data"];
    console.log(data);
}
//searchProducts("phone");

// 삼품 목록의 객체 키 추출
async function getAllProductsKeys(){
    const res = await axios.get(`${BASE_URL}/products`);
    const data = res["data"];
    console.log(Object.keys(data));
}
//getAllProductsKeys()

// 상품 목록의 객체 키-값 쌍 추출
async function getAllProductEntries(){
    const res = await axios.get(`${BASE_URL}/products`);
    const data = res["data"];
    console.log(Object.entries(data));
}
//getAllProductEntries();

// 상품 정보(products) 추출
async function getProductsData(){
    const res = await axios.get(`${BASE_URL}/products`);
    const products = res["data"]["products"];
    console.log(products);
}
//getProductsData();

// 상품 개수(total) 출력
async function getTotal(){
    const res = await axios.get(`${BASE_URL}/products`);
    const total = res["data"]["total"];
    console.log(total);
}
//getTotal();

// 배열의 고차 메서드 활용
// map() : 새로운 배열 반환
// filter() : 필터링해서 새로운 배열 반환

// 특정 속성 추출
async function getProductProperty(propertyName) {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  const values = data["products"].map((product) => product[propertyName]);
  // 각 원소(product)에서 title(key)에 해당하는 값(values)를 추출해 새로운 배열을 생성
  console.log(values);
}

//getProductProperty("title");

// 여러 속성 추출
async function getProductPropertie(propertyNames) {
    const res = await axios.get(`${BASE_URL}/products`);
    const data = res["data"];

    const extractedData = data["products"].map((product) => {
        //반환값을 담을 빈 객체 생성
        const result = {}

        propertyNames.forEach((prop) => {
            result[prop] = product[prop];
          });
      
          return result;
    });
    console.log(extractedData);
}
//getProductPropertie(["title", "price", "description"]);

// 특정 속성이 특정 값 미만인 상품 추출
// price가 10 미만

async function getFilteredProducts(propertyName, value) {
    const res = await axios.get(`${BASE_URL}/products`);
    const data = res["data"];
    const filteredProducts = data["products"].filter(
      (product) => product[propertyName] < value
    );
    console.log(filteredProducts);
  }
  
  //getFilteredProducts("price", 10);


  fetch("https://dummyjson.com/recipes/tag/Beef")
  .then((res) => res.json())
  .then(console.log);