import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const password = '6012cab836e4f17df23e6810'
const Posts = () => {
    const [posts,setPosts] = useState([])
    useEffect(() => {
        axios.get(baseURL+"/post", { headers: { "app-id": password }}).then((respond)=>{
            console.log(respond)
            setPosts(respond.data.data)
        })
    },[] )
    return (
        <>
            <h1 className="bg-red-500 text-center text-4xl p-3 tracking-widest">All Posts</h1>
            {posts.map((item)=>{
                return <div key={item.id}>
                    <h4>{"Post : "+item.text}</h4>
                    <p>
                        <Link href={"/post/"+item.id}>
                        <img className="imgflame" src={item.image}></img>
                        </Link>
                        <p>{"Likes : "+item.likes}</p>  
                    </p>
                </div>
            })}
        </>
    )
}

export default  Posts
