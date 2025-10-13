import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Product";

export default function Request() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // axios를 사용해서 DummyJSON Products 데이터를 요청
        // await를 사용하기 위해서는 async function 필요
        async function getProducts(){
            const res = await axios("https://dummyjson.com/products");
            const data = res.data;
            console.log(data);

            // 응답 데이터에서 필요한 속성을 상태(state)로 변경해야한다
            setProducts(data.products);
            
        }
        // 데이터 요청 함수 호출(실행)
        getProducts(); 
    }, []) // 빈 의존성 배열, 컴포넌트가 첫 렌더링 될 때만 콜백함수가 실행




    return (
        <div>
            {/* products : 배열 */}
            {/* map : 반복 메서드 */}
            {products.map((product) => {
                // 매개변수 product를 product 컴포넌트에 Props로 전달
                return <Product product={product}></Product>
            })}
        </div>
    ) 
}
