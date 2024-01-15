import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from "react-router-dom";
import { EmailOutlined } from "@mui/icons-material";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";



const Navbar=()=>{

    const {toggle , darkMode } = useContext(DarkModeContext);
    const {currentUser } = useContext(AuthContext);

    return(
        <div className="navbar">

            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                <span>SocialWorld</span>
                </Link>
                <HomeOutlinedIcon/>
                {darkMode ? < LightModeIcon onClick={toggle}/> : <DarkModeOutlinedIcon onClick={toggle}/>}
                <GridViewOutlinedIcon/>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search..."/>

                </div>
            </div>

            <div className="right">

                 <PersonOutlineOutlinedIcon/>
                 <EmailOutlined/>
                 <NotificationsNoneOutlinedIcon/>
                 <div className="user">
                    <img 
                    src={currentUser.profilePic}
                    /> 
                    <span>{currentUser.name}</span>
                 </div>
            </div>
        </div>
    )
}
export default Navbar;
