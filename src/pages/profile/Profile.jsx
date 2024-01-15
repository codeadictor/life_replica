import "./profile.scss"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Profiler } from "react";
import Posts from "../../components/Posts/posts";

const Profile = () =>{
   return(
    <div className="profile">
         <div className="images">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"  alt="" className="cover" />
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"  alt="" className="profilePic" />

         </div>
         <div className="profileContainer">
        
            <div className="uInfo">
                <div className="left">
                    <a href="https://www.facebook.com/" >
                        <FacebookOutlinedIcon fontSize="large"/>
                    </a>
                    <a href="https://www.instagram.com/" >
                        <InstagramIcon fontSize="large"/>
                    </a>
                    <a href="https://twitter.com/" >
                        <TwitterIcon fontSize="large"/>
                    </a>
                   
                    <a href="https://in.linkedin.com/" >
                        <LinkedInIcon fontSize="large"/>
                    </a>
                    <a href="https://in.pinterest.com/" >
                        <PinterestIcon fontSize="large"/>
                    </a>


                </div>
                <div className="center">
                    <span>Pranshu Yadav</span>
                    <div className="info">
                        <div className="item">
                            <LocationOnIcon/>
                            <span>INDIA</span>
                        </div>
                        <div className="item">
                            <LanguageIcon/>
                            <span>codeadictor.com</span>
                        </div>
                       
                    </div>
                    <button>Follow</button>
                </div>
                <div className="right">
                    <EmailIcon/>
                    <MoreVertIcon/>

                </div>
            </div>
            <Posts/>
         </div>

         



       </div>

   )
}
export default Profile
