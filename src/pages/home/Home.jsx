import "./home.scss"
import Posts from "../../components/Posts/posts";
import Stories from "../../components/stories/Stories";

const Home=()=>{
    return(
        <div className="home">
            <Stories/>
            <Posts/>
        </div>
    )
}
export default Home;
