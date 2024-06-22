import PropTypes from 'prop-types'
import Logo from '../../../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { MenuIcon } from 'lucide-react'
const Navbar = ({ setOpen }) => {
    return (
        <nav>
            <div className="flex items-center justify-between px-5">
                <Link className=" block py-3 ">
                    <img className="w-[200px] md:w-[248px]" src={Logo} alt="" />
                </Link>
                <button
                    onClick={() => setOpen(prev => !prev)}
                    className="lg:hidden">
                    <MenuIcon />
                </button>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    setOpen: PropTypes.func
}

export default Navbar