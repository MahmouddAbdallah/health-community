import { FeadbackIcon, GroupIcon, ImprovementIcon, PersonRunIcon } from '../components/icons'
import Person from '../assets/person.png'
const Section2 = () => {
    const dataSection = [
        {
            name: 'Motivation and health',
            desc: 'Motivate people to live healthier and happier lives.',
            icon: <PersonRunIcon className={'fill-[#3657CD]'} />
        },
        {
            name: 'Feedback and suggestions',
            desc: 'We also value your feedback and suggestions, so feel free to contact us anytime.',
            icon: <FeadbackIcon className={'fill-[#3657CD]'} />
        },
        {
            name: 'Improvement',
            desc: 'improving our platform and adding new features and content to meet your needs and expectations.',
            icon: <ImprovementIcon />
        }
    ]
    return (
        <div className="pcontainer flex flex-col-reverse gap-8 lg:grid lg:grid-cols-12 text-DARKCOLOR py-[100px]">
            <div className="lg:col-span-6 space-y-6 mt-24">
                <div className='space-y-5'>
                    <h1 className="text-[32px] md:text-[35px] lg:text-[40px] font-bold ">WellnEase is more than just a platform.</h1>
                    <p className="text-[12px] sm:text-[14px] md:text-base opacity-50 mr-20">
                        It’s a movement that aims to inspire, educate, and motivate people to live healthier and happier lives. We are constantly improving our platform and adding new features and content to meet your needs and expectations. We also value your feedback and suggestions, so feel free to contact us anytime.WellnEase is the platform that you need to achieve optimal health.
                    </p>
                </div>
                <div>
                    <button className='flex py-2 px-12 justify-center items-center gap-3 rounded-md bg-primary-blue text-white-White font-semibold'>
                        Join to our
                        <GroupIcon />
                    </button>
                </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
                <div className='gradient-blue relative w-full ml-10  sm:ml-0 h-[350px] sm:w-[600px] sm:h-[550px]  rounded-xl'>
                    <div className='-top-10 -left-14 sm:-top-12 sm:-left-24 absolute'>
                        <img src={Person} alt="" className='max-w-[215px] sm:max-w-[330px]' />
                    </div>
                    <div className='flex flex-col items-end'>
                        {
                            dataSection.map((item, i) =>
                                <div key={item.name}>
                                    <div className={`flex sm:right-5 w-[210px] sm:w-[300px] ${i == 1 ? 'mr-5' : 'mr-14'} mt-4 sm:mt-10`}>
                                        <div className='flex gap-3 items-center bg-white-White border p-5 rounded-xl'>
                                            <div className='space-y-1 sm:space-y-3'>
                                                <h6 className='text-[8px] sm:text-[14px] font-bold'>{item.name}</h6>
                                                <p className='opacity-50 text-[6px] font-semibold sm:opacity-30 sm:font-normal sm:text-[10px]'>
                                                    {item.desc}
                                                </p>
                                            </div>
                                            <div className='border border-DARKCOLOR/10 gradient-blue px-3 py-2 rounded-xl'>
                                                {item.icon}
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2