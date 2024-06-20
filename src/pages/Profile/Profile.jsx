import { useCallback, useEffect, useState } from "react";
import Navbar from "../../components/Navbar"
import { UseAppContext } from "../../context/AppContext";
import HeaderProfile from "./components/HeaderProfile";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Certification from "./components/Certification";
const Profile = () => {
    // const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState(null)
    const { user } = UseAppContext()

    const { id } = useParams();
    const fetchUser = useCallback(
        async () => {
            try {
                const { data } = await axios.get(`/api/user/${id}`)
                setUserData(data.user)
            } catch (error) {
                toast.error(error?.response?.data?.message || 'There is an Error')
                // setLoading(false)
                console.error(error);
            }
        }, [id]
    )
    useEffect(() => {
        if (user?._id == id) {
            setUserData(user)
        }
        else fetchUser()
    }, [fetchUser, id, user])
    return (
        <div>
            <Navbar />
            <div className={` pb-10 px-2 sm:px-3 md:px-5 lg:px-10 xl:px-20 dark:text-white-White min-h-screen`}>
                <HeaderProfile userData={userData} />
                <Certification userData={userData} />
            </div>
        </div>
    )
}

export default Profile