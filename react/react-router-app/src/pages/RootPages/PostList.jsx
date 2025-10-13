import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function PostList() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getPosts(){
            const res = await axios.get("https://dummyjson.com/posts");
            setPosts(res.data.posts);
        }
        getPosts();
    }, [])

    return (
        <div className='m-5'>
            {posts.map((post) => {
                return (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <div className='border p-2'>
                            <p>Post ID : {post.id}</p>
                            <p>Post Title : {post.title}</p>
                        </div>
                        
                        <br />
                    </Link>
                )
            })}
        </div>
    )
}
