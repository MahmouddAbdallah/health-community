import Navbar from "../../components/Navbar"
import HeaderProfile from "./components/HeaderProfile";
import { useParams } from "react-router-dom";
import axios from "axios";
import Certification from "./components/Certification";
import Articles from "./components/Articles";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
    const { id } = useParams();

    const { data } = useQuery({
        queryKey: ['user', id],
        queryFn: async () => {
            const { data } = await axios.get(`/api/user/${id}`)
            return data.user
        }
    })
    return (
        <div>
            <Navbar />
            <div className={` pb-10 px-2 sm:px-3 md:px-5 lg:px-10 xl:px-20 dark:text-white-White min-h-screen`}>
                <HeaderProfile userData={data} />
                {data?.role != 'user' ? <Certification userData={data} /> : ""}
                {data?.role != 'user' ? <Articles userData={data} /> : ""}
            </div>
        </div>
    )
}

export default Profile