import HomeArticle from "../components/HomeArticle"
import HomeDoctor from "../components/HomeDoctor"
import WelcomeSearch from "../components/WelcomeSearch"

const Home = () => {
    return (
        <div>
            <WelcomeSearch />
            <HomeArticle />
            <HomeDoctor />
        </div>
    )
}

export default Home