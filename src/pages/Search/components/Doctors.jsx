import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { ExperienceIcon, LocationIcon } from "../../../components/icons";


const Doctors = () => {
    const doctors = useSelector(state => state.search.data.doctor)
    console.log(doctors);
    return (
        <div>
            {
                doctors?.map((doctor) => {
                    return (
                        <Link key={doctor._id} to={`/profile/${doctor._id}`}>
                            <div className="flex gap-3">
                                <div className="w-full sm:w-60 max-h-60">
                                    <img className="rounded-2xl w-full h-full" src={doctor.picture || './person.jpg'} alt="" />
                                </div>
                                <div className="flex flex-col gap-3 group-hover:text-blue-600 group-hover:underline">
                                    <h2 className="font-semibold sm:text-xl whitespace-nowrap">{doctor.name}</h2>
                                    <div className="flex gap-2">
                                        <div className="flex">
                                            <LocationIcon className={'stroke-none size-7'} />
                                            <span>
                                                Locaiton:
                                            </span>
                                        </div>
                                        <span className="font-medium">{doctor.country}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex">
                                            <ExperienceIcon className={'w-7 h-7 fill-black-black'} />
                                            <span>
                                                Specialization:
                                            </span>
                                        </div>
                                        <span className="font-medium">{doctor.specialization}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="font-medium uppercase">{doctor.role}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Doctors