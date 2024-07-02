import { Navigate } from "react-router-dom"
import FAQs from "../components/FAQs"
import Hero from "../components/Hero"
import Section1 from "../components/Section1"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import Testimonies from "../components/Testimonies"
import { UseAppContext } from "../context/AppContext"
import Navbar from "../components/Navbar"

const IntroPage = () => {
    const { user } = UseAppContext()
    if (user) {
        return <Navigate to={'/home'} />
    }
    else return (
        <div>
            <Navbar />
            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />
            <Testimonies />
            <FAQs />
        </div>
    )
}

export default IntroPage