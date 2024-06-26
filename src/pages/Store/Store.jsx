import BackGroundImg from "../../components/BackGroundImg"
import bg from '../../assets/store.jpg'
import { RectLogoIcon, SearchIcon } from '../../components/icons'
import Navbar from "../../components/Navbar"
import Welcome from "./components/Welcome"
import Categories from "./components/Categories"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { Loader2, XIcon } from "lucide-react"
import { Link } from "react-router-dom"

const Store = () => {
    const [search, setSearch] = useState(null);
    const [keyword, setKeyword] = useState('')
    const [loading, setLoading] = useState('')
    const fetchSearch = useCallback(
        async () => {
            try {
                if (keyword) {
                    setLoading(true)
                    const { data } = await axios.get(`/api/store/search?keyword=${keyword}&fields=title,category&limit=5`)
                    setSearch(data.products)
                    setLoading(false)
                } else {
                    setSearch(null)
                    setLoading(false)
                }
            } catch (error) {
                console.error(error);
                setLoading(false)
            }
        }, [keyword]
    )
    useEffect(() => {
        fetchSearch()
    }, [fetchSearch])

    return (
        <div>
            <BackGroundImg bg={bg}>
                <Navbar inderbg={true} />
                <div className="h-full flex items-center justify-center -mt-20">
                    <div className="flex flex-col items-center gap-5">
                        <div className="flex flex-col gap-3 justify-center items-center">
                            <RectLogoIcon className={'w-64 h-fit '} />
                            <span className="uppercase text-sm text-white-White font-medium">
                                Shopping
                            </span>
                        </div>
                        <form className="w-full flex justify-center " >
                            <div className="relative flex">
                                <div className="relative z-20 w-[320px] sm:w-[400px] md:w-[450px] lg:w-[550px] flex justify-center items-center">
                                    <SearchIcon className={"absolute left-2 fill-black-black/50 w-5 h-5"} />
                                    <input
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        type="text"
                                        placeholder="Search for doctors, or anything?"
                                        className="w-full py-3 rounded-full pl-8 outline-none "
                                    />
                                    {loading && <Loader2 className={"absolute animate-spin right-2 size-4"} />}
                                    {(keyword && !loading) && <XIcon
                                        onClick={() => setKeyword('')}
                                        className={"absolute right-2 size-4 cursor-pointer"} />
                                    }
                                </div>
                                {
                                    search &&
                                    <div className="w-full absolute top-5 bg-white-White pt-10 pb-3 rounded-b-xl rounded-t-md first:border-t">
                                        {search?.map(item =>
                                            <Link className="block" to={`/store/search?keyword=${keyword}&prodcutId=${item._id}&categoryId=${item.category}`} key={item._id}>
                                                <div className="flex gap-3 py-2 px-2">
                                                    <SearchIcon className={'size-5'} />
                                                    <div>
                                                        <span>
                                                            {item.title}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </BackGroundImg>
            <div>
                <Welcome />
                <Categories />
            </div>
        </div>
    )
}

export default Store