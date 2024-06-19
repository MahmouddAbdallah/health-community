import BackGroundImg from "../../components/BackGroundImg"
import Navbar from "../../components/Navbar"
import bg from '../../assets/blogCover.jpg'
import { RectLogoIcon, SearchIcon } from '../../components/icons'
import BlogCategory from "./components/BlogCategory"
import BlogArticles from "./components/BlogArticles"
const Blog = () => {
    return (
        <div>
            <BackGroundImg bg={bg}>
                <Navbar inderbg={true} />
                <div className="h-full flex items-center justify-center -mt-20">
                    <div className="flex flex-col items-center gap-5">
                        <div className="flex flex-col gap-3 justify-center items-center">
                            <RectLogoIcon className={'w-64 h-fit '} />
                            <span className="uppercase text-sm text-white-White font-medium">
                                Blog
                            </span>
                        </div>
                        <form className="w-full flex justify-center " >
                            <div className="relative w-[320px] sm:w-[400px] md:w-[450px] lg:w-[550px] flex justify-center items-center">
                                <SearchIcon className={"absolute left-2 fill-black-black/50 w-5 h-5"} />
                                <input
                                    type="text"
                                    placeholder="Search for doctors, or anything?"
                                    className="w-full py-3 rounded-full pl-8 outline-none"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </BackGroundImg>
            {/* <div className="pcontainer py-20 ">
                <h4 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-9xl font-light">
                    Latest update
                </h4>
            </div> */}
            <div>
                <BlogCategory />
                <BlogArticles />
            </div>
        </div>
    )
}

export default Blog