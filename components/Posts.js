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
    return (  
        <div>
        {posts.map(post=>(
            <Post key={post.id}
                id={post.id}
                username={post.username}
                userImg ={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
        </div>
    );
}

export default Posts;