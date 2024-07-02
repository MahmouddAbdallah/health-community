import { useCallback, useEffect, useRef, useState } from 'react'
import doctorAvatar from '../assets/Doctoravatar.png'
import pharmacy from '../assets/pharmacy.jpg'
import bills from '../assets/bills.jpg'

const Section1 = () => {
    const [points, setPoints] = useState(0)
    const dataSection = [
        { id: 1, img: doctorAvatar, name: 'Doctors', p: ' You may be looking for a doctor with a specific set of abilities to add to your.' },
        { id: 2, img: bills, name: 'Drugs', p: ' You may be looking for a doctor with a specific set of abilities to add to your.' },
        { id: 3, img: pharmacy, name: 'Pharmacy', p: ' You may be looking for a doctor with a specific set of abilities to add to your.' },
        // { id: 4, img: doctorAvatar, name: 'Doctors', p: ' You may be looking for a doctor with a specific set of abilities to add to your.' },
        // { id: 5, img: doctorAvatar, name: 'Doctors', p: ' You may be looking for a doctor with a specific set of abilities to add to your.' },
        // { id: 6, img: doctorAvatar, name: 'Doctors', p: ' You may be looking for a doctor with a specific set of abilities to add to your.' },
        // { id: 7, img: doctorAvatar, name: 'Doctors', p: ' You may be looking for a doctor with a specific set of abilities to add to your.' },
        // { id: 8, img: doctorAvatar, name: 'Doctors', p: ' You may be looking for a doctor with a specific set of abilities to add to your.' },
        // { id: 9, img: doctorAvatar, name: 'Doctors', p: ' You may be looking for a doctor with a specific set of abilities to add to your.' },
    ]
    const slider = useRef({});

    const handlePoints = useCallback(() => {
        const scrollLeft = slider.current?.scrollLeft || 0;
        if (scrollLeft < 700) setPoints(0);
        else if (scrollLeft >= 700 && scrollLeft < 1300) setPoints(3);
        else if (scrollLeft >= 1300) setPoints(6);
    }, [setPoints]);

    useEffect(() => {
        const scrollSlider = slider.current;
        if (scrollSlider) {
            scrollSlider.addEventListener("scroll", handlePoints);
            return () => {
                scrollSlider.removeEventListener('scroll', handlePoints);
            };
        }
    }, [handlePoints]);
    useEffect(() => {
        const scrollSlider = slider.current;

        if (window.innerWidth < 900) {
            scrollSlider.scrollLeft += 95
        }
        window.addEventListener("resize", () =>
            window.innerWidth < 900 ? scrollSlider.scrollLeft = 195 :
                scrollSlider.scrollLeft = 0
        );
    }, []);
    return (
        <div className="text-DARKCOLOR bg-white-Smoke_White py-[100px]">
            <div className=" space-y-14">
                <div className="flex flex-col items-center">
                    <div className=" lg:w-[560px] text-center space-y-4">
                        <h3 className="text-3xl lg:text-5xl font-bold">Are you looking for</h3>
                        <p className="opacity-50">
                            whether you’re an athlete, someone who performs regular physical
                            labor or somewhere in-we can help
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex gap-8 lg:w-[870px] py-2 overflow-x-scroll scroll-smooth scrollbar-hide " ref={slider}>
                        {dataSection.map(item =>
                            <div key={item.id} className="bg-white-White px-4 mx-2 py-3 shadow-[0px_2px_4px_0px_rgba(0,_0,_0,_0.25)] rounded-[11px]">
                                <div className="flex flex-col gap-3 w-[222px]">
                                    <div className="flex items-center gap-4">
                                        <div className=" w-16 h-16 ">
                                            <img className=" w-16 h-16 rounded-full object-cover" src={item?.img} alt="" />
                                        </div>
                                        <div>
                                            <h6 className="font-bold text-2xl">{item?.name}</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="opacity-50 text-[12px]">
                                            {item.p}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='flex gap-4'>
                        {dataSection.map((item, i) =>
                            <div key={item.id} className={`w-3 h-3 rounded-full ${points == i ? ' bg-[#67CAC5]' : 'bg-black-black/20'} ${i % 3 == 0 ? "block" : "hidden"}`} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1