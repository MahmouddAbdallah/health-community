import whyjoin from '../../../assets/whyJoin.jpg'
const WhyJoin = () => {
    const reasons = [
        'Connect with patients: Expand your patient base and engage with patients in a secure and convenient online environment.',
        'Collaborate with colleagues: Communicate and collaborate with fellow doctors, specialists, and healthcare professionals to provide comprehensive care.',
        'Access resources: Gain access to a wealth of resources, including clinical guidelines, research articles, and educational materials to support your practice.',
        'Streamline workflows: Take advantage of our intuitive tools for appointment scheduling, telemedicine, electronic health records (EHR), and more to streamline your practice operations.',
        "Stay informed: Stay up-to-date on the latest advancements in healthcare technology, treatments, and trends through our platform's news and updates."
    ]
    return (
        <div className="pcontainer py-28">
            <div className="flex flex-col-reverse gap-10 lg:grid grid-cols-12 lg:gap-20">
                <div className="col-span-12 lg:col-span-6">
                    <div className="space-y-5 lg:space-y-10">
                        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">Why Join WellnEase?</h1>
                        <ul className="space-y-5">
                            {reasons.map(item => {
                                return (
                                    <li key={item}>
                                        <div className="flex items-start gap-3">
                                            <div className="pt-2">
                                                <div className="w-2 h-2 bg-black-black rounded-full" />
                                            </div>
                                            <span>
                                                {item}
                                            </span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <img className='w-full' src={whyjoin} alt="" />
                </div>
            </div>
        </div>
    )
}

export default WhyJoin