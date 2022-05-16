import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../Firebase";
import Post from "./Post";

const posts = [
    {
        id:'1',
        username:'vali_ruziboev',
        userImg: 'https://avatars.githubusercontent.com/u/89704608?v=4',
        img:"https://res.cloudinary.com/dz209s6jk/image/upload/v1630800445/Screenshots/tzabwk6wrq0vwuil69tr.jpg",
        caption:'Here is the next project'
    },
    {
        id:'2',
        username:'vali_ruziboev',
        userImg: 'https://avatars.githubusercontent.com/u/89704608?v=4',
        img:"https://res.cloudinary.com/dz209s6jk/image/upload/v1630800445/Screenshots/tzabwk6wrq0vwuil69tr.jpg",
        caption:'Here is the next project'
    },
]
const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const unsubscibe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot=>{
            setPosts(snapshot.docs);
        })

        return unsubscibe

    }, [db])

    return (  
        <div>
        {posts.map(post=>(
            <Post key={post.id}
                id={post.id}
                username={post.data().username}
                userImg ={post.data().userImg}
                img={post.data().image}
                caption={post.data().caption}
            />
        ))}
        </div>
    );
}

export default Posts;