import { StarIcon } from '../components/icons'
const Testimonies = () => {
    return (
        <div className="pcontainer flex flex-col gap-10 lg:grid lg:grid-cols-12 text-DARKCOLOR py-[100px]">
            <div className="lg:col-span-6 space-y-6">
                <div className='space-y-5'>
                    <h1 className="text-3xl lg:text-5xl font-bold ">What Our Happy Clients Say About Us</h1>
                    <p className="text-[12px] sm:text-[14px] md:text-base opacity-50 mr-16">
                        I{`'`}ve been a member of fitness within for about 6 months now and i absolutely love it! The trainers are so motivate and they really help to reach fitness goals.
                    </p>
                </div>
            </div>
            <div className="lg:col-span-6">
                <div className='gradient-blue px-3 py-5 rounded-[18px]'>
                    <div className='flex gap-3'>
                        <div className='w-24 h-24 rounded-full border border-black-black/20'>
                            <div className='w-24 h-24 flex items-center justify-center bg-blue-500 font-bold text-white-White rounded-full object-cover' >
                                MA
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold'>Mahmoud Mohamed</h3>
                            <p className=' opacity-50'>Happy customer</p>
                        </div>
                    </div>
                    <div className=' space-y-3 mt-5'>
                        <div className='flex gap-1'>
                            <StarIcon className={'fill-[#FFC106]'} />
                            <StarIcon className={'fill-[#FFC106]'} />
                            <StarIcon className={'fill-[#FFC106]'} />
                            <StarIcon className={'fill-[#FFC106]'} />
                        </div>
                        <div>
                            <p className='opacity-50'>
                                I&rsquo;ve been coming to this gym for 3 years now and I&rsquo;ve never been in better shape. The trainers are amazing and they always push me be my best. I&rsquo;m so glad to this gym.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonies