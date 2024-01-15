import { Link } from 'react-router-dom';
import './post.scss';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Comments from '../components/comments/comments';
import { useState } from 'react';
const Post = ({post}) => {
    const [commentOpen, setCommentOpen]=useState(false)


    // temporary 
    const liked = false;

    return (
        <div className="post">
            <div className='container'>
            <div className="user">
                <div className="userInfo">
                     <img src={post.profilePic} alt=""/>
                     <div className='details'>
                        <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
                         <span className='name'>{post.name}</span>
                        </Link>
                        <span className="date">1 min ago</span>
                     </div>
                </div> 
                <MoreHorizOutlinedIcon/>
            </div>
            <div className="content">
                <p>{post.desc}</p>
                <img src={post.img} alt=""/>
            </div>

            <div className="info">
                <div className="item">
                   {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
                   12 Likes
                </div>
                <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                   <ChatOutlinedIcon/>
                   12 Comments
            </div>
            <div className="item">
                   <ShareOutlinedIcon/>
                   Share
            </div>
        </div>
        
        {commentOpen && <Comments/>}
        
        </div>
        </div>
    )
}

export default Post;