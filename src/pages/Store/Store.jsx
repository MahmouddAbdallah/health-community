import BackGroundImg from "../../components/BackGroundImg"
import bg from '../../assets/store.jpg'
import { RectLogoIcon, } from '../../components/icons'
import Navbar from "../../components/Navbar"
import Welcome from "./components/Welcome"
import Categories from "./components/Categories"
import Search from '../../components/Search'


const Store = () => {
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
                        <Search
                            width={'w-fit'}
                            placeholder={'Search about bills?'}
                        />
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