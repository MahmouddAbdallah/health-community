import { createContext, useContext, useEffect, useState, } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const createProvideContext = createContext()
const AppProviderContext = ({ children }) => {
    const [user, setUser] = useState(null)

    const getUser = async () => {
        try {
            const { data } = await axios.get(`/api/verify-me`)
            setUser(data.user);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getUser();
    }, [])
    // if (localStorage.getItem("mode") == "dark") {
    //     document.body.classList.remove("dark");
    //     localStorage.setItem("mode", "light")
    // } else {
    //     document.body.classList.add("dark");
    //     localStorage.setItem("mode", "dark")
    // }

    return (
        <createProvideContext.Provider value={{ user, setUser }}>
            {children}
        </createProvideContext.Provider>
    )
}

AppProviderContext.propTypes = {
    children: PropTypes.element.isRequired
}

export const UseAppContext = () => {
    return useContext(createProvideContext)
}
export default AppProviderContext