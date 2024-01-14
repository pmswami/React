// import React, { useEffect, useState } from 'react'
// import axios from "axios"

// function DataFetching() {
    
//     const [posts, setPosts] = useState([])
//     // "https://jsonplaceholder.typicode.com/posts"
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then((response)=>{
//             // console.log(posts)
//             console.log(response)
//              return setPosts(response.data)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//         // console.log("useEffect")
//     },[])
//   return (
//     <div>
//         <ul>
//             {posts.map((post)=>{
//                 return <li key={post.id}>{post.title}</li>
//             })}
//         </ul>
//     </div>
//   )
// }

// export default DataFetching



// import React, { useEffect, useState } from 'react'
// import axios from "axios"

// function DataFetching() {
    
//     const [posts, setPosts] = useState([])
//     const [id, setId] = useState(null)
//     // "https://jsonplaceholder.typicode.com/posts"
//     useEffect(()=>{
//         if(id)
//         {
//             axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//             .then((response)=>{
//                 // console.log(posts)
//                 console.log(response)
//                 return setPosts([response.data])
//             })
//             .catch((error)=>{
//                 console.log(error)
//             })
//             // console.log("useEffect")
//         }
//         else 
//         {
//             axios.get(`https://jsonplaceholder.typicode.com/posts`)
//             .then((response)=>{
//                 // console.log(posts)
//                 console.log(response)
//                 return setPosts(response.data)
//             })
//             .catch((error)=>{
//                 console.log(error)
//         })}
//     },[id])
//   return (
//     <div>
//         <ul>
//             <input type="text" onChange={e=>setId(e.target.value)}/>
//             {posts.map((post)=>{
//                 return <li key={post.id}>{post.title}</li>
//             })}
//         </ul>
//     </div>
//   )
// }

// export default DataFetching


import React, { useEffect, useState } from 'react'
import axios from "axios"

function DataFetching() {
    
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    // "https://jsonplaceholder.typicode.com/posts"
    useEffect(()=>{
        console.log(id)
        if(id)
        {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response)=>{
                console.log(response)
                return setPosts([response.data])
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },[id])
  return (
    <div>
        <ul>
            <input type="text" onChange={e=>setId(e.target.value)} value={id}/>
            {posts.map((post)=>{
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
    </div>
  )
}

export default DataFetching