import BackGroundImg from "../../components/BackGroundImg"
import bg from '../../assets/doctorHero.jpg';
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import WhyJoin from "./components/WhyJoin";
const Doctor = () => {
    return (
        <div>
            <BackGroundImg bg={bg}>
                <Navbar inderbg={true} />
                <div className="h-full flex items-center justify-center -mt-10">
                    <div className="space-y-3">
                        <div className="text-center lg:px-40 space-y-5">
                            <h1 className="text-4xl font-bold text-white-White">Welcome, Doctor!</h1>
                            <p className="text-white-White">
                                At WellnEase, we&lsquo;re dedicated to empowering healthcare professionals like you to provide exceptional care and make a positive impact on patient health outcomes. Whether you&lsquo;re a seasoned practitioner or just starting your journey in the medical field, we&lsquo;re excited to welcome you to our community of passionate doctors and healthcare innovators.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Link className=" px-20 bg-primary-blue py-2 text-white-White rounded-md" to={'/doctor/sign-in'}>
                                Join us
                            </Link>
                        </div>
                    </div>
                </div>
            </BackGroundImg>
            <WhyJoin />
        </div>
    )
}

export default Doctor