import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { ExperienceIcon, LocationIcon } from "../../../components/icons";


const Doctors = () => {
    const doctors = useSelector(state => state.search.data.doctor)
    return (
        <div>
            <div className="pb-3 font-medium">
                <h3>Doctors:</h3>
            </div>
            <div className="flex flex-col gap-5">
                {
                    doctors?.map((doctor) => {
                        return (
                            <Link key={doctor._id} to={`/profile/${doctor._id}`}>
                                <div className="flex gap-3">
                                    <div className="w-28 h-28 bg-black-black/20 rounded-xl overflow-hidden">
                                        <img className="w-full h-full  object-contain" src={doctor.picture || './person.jpg'} alt="" />
                                    </div>
                                    <div className="flex flex-col gap-1 group-hover:text-blue-600 group-hover:underline">
                                        <h2 className="font-semibold whitespace-nowrap">{doctor.name}</h2>
                                        <div className="flex gap-2 text-xs">
                                            <div className="flex">
                                                <LocationIcon className={'stroke-none size-5'} />
                                                <span>
                                                    Locaiton:
                                                </span>
                                            </div>
                                            <span className="font-medium">{doctor.country}</span>
                                        </div>
                                        <div className="flex gap-2 text-xs">
                                            <div className="flex">
                                                <ExperienceIcon className={'size-5 fill-black-black'} />
                                                <span>
                                                    Specialization:
                                                </span>
                                            </div>
                                            <span className="font-medium">{doctor.specialization}</span>
                                        </div>
                                        <div className="flex gap-2 text-xs">
                                            <span className="font-medium uppercase">{doctor.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Doctors