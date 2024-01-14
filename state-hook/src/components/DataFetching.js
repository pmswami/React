import React, { useEffect, useState } from 'react'
import axios from "axios"

function DataFetching() {
    
    const [posts, setPosts] = useState([])
    // "https://jsonplaceholder.typicode.com/posts"
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            // console.log(posts)
            console.log(response)
             return setPosts(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        // console.log("useEffect")
    },[])
  return (
    <div>
        <ul>
            dlkfngn
            {posts.map((post)=>{
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
    </div>
  )
}

export default DataFetching