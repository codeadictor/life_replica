import { useContext } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/authContext';

const Comments = ()=>{
    
    const {currentUser} = useContext(AuthContext);
    // temporary 
    const comments=[
        {
           id:1,
           desc:"it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
           name:"race toply",
           userId:1,
           profilePicture:"https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id:2,
            desc:"it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using ",
            name:"hena",
            userId:2,
            profilePicture:"https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
         },
         {
            id:3,
            desc:"it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
            name:"hema",
            userId:3,
            profilePicture:"https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
         },
    ];
    return(
        <div className='comments'>
            <div className="write">
            <img src="currentUser.profilePic" alt=''/>
            <input type="text" placeholder="write a comment "/>
            <button>Send</button>
            </div>
            {comments.map((comment)=>(
                <div className='comment'>
                    <img src="comment.profilePicture" alt=''/>
                    <div className='info'>
                        <span>
                            {comment.name}
                        </span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>
              ))
        }
             
        </div>
    )
}

export default Comments;