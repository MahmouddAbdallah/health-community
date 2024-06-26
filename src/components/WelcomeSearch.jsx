import BackGroundImg from "./BackGroundImg"
import bg from '../assets/vegetable.png'
import Navbar from "./Navbar"
import { UseAppContext } from "../context/AppContext"
import Search from "./Search"
const WelcomeSearch = () => {
    const { user } = UseAppContext();
    return (
        <BackGroundImg bg={bg}>
            <Navbar inderbg={true} />
            <div className="h-full flex items-center justify-center -mt-10">
                <div className="flex flex-col items-center gap-10">
                    <div className="text-center">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white-White">
                            Hello {user?.name},<br />
                            What would you like to do next?
                        </h1>
                    </div>
                    <Search />
                </div>
            </div>
        </BackGroundImg>
    )
}

export default WelcomeSearch