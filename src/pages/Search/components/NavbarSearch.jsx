import { Link } from 'react-router-dom'
import LogoWithoutText from '../../../assets/LogoWithoutText.svg'
import Search from '../../../components/Search'
import UserNavbar from '../../../components/UserNavbar'

const NavbarSearch = () => {
    return (
        <nav className="shadow-sm">
            <div className="pcontainer py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5 w-full lg:w-fit">
                        <Link to={'/'}>
                            <img className="w-14 h-14" src={LogoWithoutText} alt='' />
                        </Link>
                        <div className='flex-1 '>
                            <Search width={'w-full'} />
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        < UserNavbar />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarSearch