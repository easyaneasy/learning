import axios from 'axios';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

// 주소에 있는 경로 파라미터를 불러오는 훅
// posts/:postId -> :postId 부분이 경로 파라미터
import { useParams } from 'react-router-dom'

export default function PostDetail() {
    const {postId} = useParams();
    const [singlePost, setSinglePost] = useState([]);
    useEffect(() => {
        // postId를 활용해서
        // Get a single product API를 요청 후 화면에 게시글 상세 정보 렌더링
        async function getSinglePost(){
            const res = await axios.get(`https://dummyjson.com/posts/${postId}`);
            setSinglePost(res.data);
        }
        getSinglePost();
    }, [postId]);
    return (
        <div className='m-5'>
            <p>Post ID : {singlePost.id}</p>
            <p>제목 : {singlePost.title}</p>
            <p>내용 : {singlePost.body}</p>
        </div>
    )
}
