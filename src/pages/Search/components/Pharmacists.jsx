import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { ExperienceIcon, LocationIcon } from "../../../components/icons";


const Pharmacists = () => {
    const pharmacist = useSelector(state => state.search.data.pharmacist)
    return (
        <div className="pt-5">
            <div className="pb-3 font-medium">
                <h3>Pharmacists:</h3>
            </div>
            <div className="flex flex-col gap-5">
                {
                    pharmacist?.map((pharmacist) => {
                        return (
                            <Link key={pharmacist._id} to={`/profile/${pharmacist._id}`}>
                                <div className="flex gap-3">
                                    <div className="w-28 h-28 bg-black-black/20 rounded-xl overflow-hidden">
                                        <img className="w-full h-full  object-contain" src={pharmacist.picture || './person.jpg'} alt="" />
                                    </div>
                                    <div className="flex flex-col gap-1 group-hover:text-blue-600 group-hover:underline">
                                        <h2 className="font-semibold whitespace-nowrap">{pharmacist.name}</h2>
                                        <div className="flex gap-2 text-xs">
                                            <div className="flex">
                                                <LocationIcon className={'stroke-none size-5'} />
                                                <span>
                                                    Locaiton:
                                                </span>
                                            </div>
                                            <span className="font-medium">{pharmacist.country}</span>
                                        </div>
                                        <div className="flex gap-2 text-xs">
                                            <div className="flex">
                                                <ExperienceIcon className={'size-5 fill-black-black'} />
                                                <span>
                                                    Specialization:
                                                </span>
                                            </div>
                                            <span className="font-medium">{pharmacist.specialization}</span>
                                        </div>
                                        <div className="flex gap-2 text-xs">
                                            <span className="font-medium uppercase">{pharmacist.role}</span>
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

export default Pharmacists