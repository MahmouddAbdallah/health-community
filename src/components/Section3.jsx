import Book from '../assets/bookAppointment.png'
import Shop from '../assets/Shop.png'
import Community from '../assets/Community.png'
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../components/icons'
const Section3 = () => {
    const dataFeatures = [
        { id: 0, img: Book, header: 'Book appointments', p: "If you need to consult a doctor, you don’t have to wait in long queues or travel far. You can book an appointment with a doctor of your choice on our website, and get access to quality and affordable health care. You can also choose from different modes of consultation, such as online, phone, or in-person. You can also view the doctor’s profile, ratings, availability, and fees, and get reminders and notifications for your appointment." },
        { id: 1, img: Shop, header: 'Shop for products', p: "Whether you’re looking for supplements, vitamins, medications, or personal care items, you can find them on our website. We have a wide range of products from trusted and verified sellers, and we offer competitive prices, fast delivery, and secure payment. You can also read reviews, compare products, and get recommendations from our experts. As a pharmacist, you can also buy products in bulk and enjoy discounts and rewards." },
        { id: 2, img: Community, header: 'Community', p: "You’re not alone on your journey to optimal health. You can join our community of like-minded people who share your vision and values. You can connect with other users, join groups, participate in challenges, and get feedback from experts. You can also share your experiences, insights, and tips, and learn from others. You can also access exclusive content, events, and offers from our partners and sponsors." },
    ]
    return (
        <div className="pcontainer px-3 bg-white-Snow_White text-DARKCOLOR py-[100px]">
            <div>
                <div className="text-center space-y-4 mb-20">
                    <p className='font-semibold text-primary-blue'>FEATURES</p>
                    <h3 className="text-3xl lg:text-5xl font-bold">Our special features</h3>
                </div>
            </div>
            <div className='grid grid-cols-12 items-center gap-5 lg:gap-[50px]'>
                {dataFeatures.map(item =>
                    <div key={item.id} className='lg:w-[406px] mx-5 px-3 pt-3 pb-5 flex flex-col gap-5 rounded-[14px] border border-[rgba(0,0,0,0.10)] col-span-12  sm:col-span-6 xl:col-span-4 h-fit'>
                        <div>
                            <img src={item.img} className={`rounded-[14px]  ${item.id == 1 ? 'xl:w-[390px] xl:h-[270px]' : 'w-full'}`} alt="" />
                        </div>
                        <div className='space-y-3'>
                            <div className='text-center'>
                                <h3 className=' text-2xl lg:text-3xl font-bold'>{item.header}</h3>
                            </div>
                            <div className='space-y-3'>
                                <p className='text-xs sm:text-sm md:text-base opacity-50'>
                                    {item.p}
                                </p>
                                <div>
                                    <Link className='underline text-sm font-[500] text-primary-blue flex gap-2'>Learn More <ArrowRightIcon className={'w-5 h-5'} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Section3