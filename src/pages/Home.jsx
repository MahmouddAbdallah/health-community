import { Navigate } from "react-router-dom"
import HomeArticle from "../components/HomeArticle"
import HomeDoctor from "../components/HomeDoctor"
import WelcomeSearch from "../components/WelcomeSearch"
import { UseAppContext } from "../context/AppContext"

const Home = () => {
    const { user } = UseAppContext()

    if (!user) {
        return <Navigate to={'/'} />
    }
    return (
        <div>
            <WelcomeSearch />
            <HomeArticle />
            <HomeDoctor />
        </div>
    )
}

export default Home