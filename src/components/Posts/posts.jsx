import "./posts.scss"
import Post from "../../post/Post";
const Posts = () => {

    // temporary 
    const posts = [
        {
            id:1,
            name:"Iliana Bey",
            userId:1,
            profilePic:"https://images.pexels.com/photos/245388/pexels-photo-245388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:"lorem ipsum dolor sit amet consectuerut adiaptsicing alit ",
            img:"https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id:2,
            name:"Natasha",
            userId:2,
            profilePic:"https://images.pexels.com/photos/245388/pexels-photo-245388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:"lorem ipsum dolor sit amet consectuerut adiaptsicing alit ",
            img:"https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
         },
        {
            id:3,
            name:"Elishy",
            userId:3,
            profilePic:"https://images.pexels.com/photos/245388/pexels-photo-245388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:"lorem ipsum dolor sit amet consectuerut adiaptsicing alit ",
            img:"https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
         },
        { 
            id:4,
            name:"Ketty Pery",
            userId:4,
            profilePic:"https://images.pexels.com/photos/245388/pexels-photo-245388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:"lorem ipsum dolor sit amet consectuerut adiaptsicing alit ",
            img:"https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
          },
    ];
   return (
    <div className="posts">
     {posts.map(post=>(
       <Post post={post} key={post.id}/>
     ))}
    </div>
   )
}

export default Posts;