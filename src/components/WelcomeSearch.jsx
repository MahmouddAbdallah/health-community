import BackGroundImg from "./BackGroundImg"
import bg from '../assets/vegetable.png'
import Navbar from "./Navbar"
import { UseAppContext } from "../context/AppContext"
import { SearchIcon } from "../components/icons"
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
                    <form className="w-full flex justify-center " >
                        <div className="relative w-[320px] sm:w-[400px] md:w-[450px] lg:w-[550px] flex justify-center items-center">
                            <SearchIcon className={"absolute left-3 fill-black-black/50 w-5 h-5"} />
                            <input
                                type="text"
                                placeholder="Search for doctors, or anything?"
                                className="w-full py-3 rounded-full pl-10 outline-none"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </BackGroundImg>
    )
}

export default WelcomeSearch