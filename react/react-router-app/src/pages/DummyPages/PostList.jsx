import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// useSearchParams : 쿼리 파라미터 관리
import { useSearchParams } from 'react-router-dom'

import PATHS from '../../constants/paths'

export default function PostList() {

    const [posts, setPosts] = useState([]);

    // searchParams : 쿼리 파라미터 값을 가진 객체
    // setSearchParams : 쿼리 파라미터 값을 변경하는 함수
    const [searchParams, setSearchParams] = useSearchParams();

    // useEffect 의존성 배열의 역할
    // useEffect 콜백 함수를 언제 실행할것이냐를 결정
    // 의존성 배열이 빈 배열이면 컴포넌트가 첫 렌더링 될 때 콜백 함수 실행
    // 의존성 배열에 데이터가 있으면 해당 데이터가 변경될 때 콜백 함수 실행
    useEffect(() => {
       // 쿼리 파라미터에서 key가 order인 값을 불러오기
       // Nullish 연산자(??)를 통해 기본값을 지정
        const sortBy = searchParams.get("sortBy") ?? "id";
        const order = searchParams.get("order") ?? "asc";

        async function getPosts(){
            const res = await axios.get(`https://dummyjson.com/posts?sortBy=${sortBy}&order=${order}`);
            setPosts(res.data.posts);
        }
        getPosts();
    }, [searchParams]); // searchParams가 변경되면 useEffect 콜백 함수를 실행한다

    return (
        <div className='m-5'>
            <div className='flex gap-2 mb-5'>
                <button className='border-2 p-2 cursor-pointer' onClick={() => {
                    // id를 기준으로 오름차순
                    setSearchParams({sortBy: "id", order: "asc"});
                }}>ID 오름차순</button>
                <button className='border-2 p-2 cursor-pointer' onClick={() => {
                    // id를 기준으로 내림차순
                    setSearchParams({sortBy: "id", order: "desc"});
                }}>ID 내림차순</button>
            </div>

            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <Link to={PATHS.ROOT.getPostDetail(post.id)}>
                            No. {post.id} - {post.title}
                        </Link>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}
