import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext";

const Stories = () => {

    const {currentUser} = useContext(AuthContext);
    // temporary
    const stories = [
        {
            id:1,
            name:"Prateek Yadav",
            img:"https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id:2,
            name:"Ashwani Kumar",
            img:"https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id:3,
            name:"Javed",
            img:"https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id:4,
            name:"Birju",
            img:"https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
        },
    ];
   return (
    <div className="stories">
         <div className="story">
                <img src={currentUser.profilePic} alt=""/>
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img} alt=""/>
                <span>{story.name}</span>
            </div>
                
        ))}
    </div>
   )
}

export default Stories;