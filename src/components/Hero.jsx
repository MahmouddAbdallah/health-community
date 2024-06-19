import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.jpg'
import { UseAppContext } from '../context/AppContext';

const Hero = () => {
    const { user } = UseAppContext();
    return (
        <div className="pcontainer flex flex-col-reverse gap-8 lg:grid lg:grid-cols-12 text-DARKCOLOR py-[100px]">
            <div className="lg:col-span-6 space-y-6">
                <div className='space-y-5'>
                    <h1 className="text-[40px] md:text-[55px] lg:text-[60px] font-bold ">WellnEase: Your Path to Optimal Health</h1>
                    <p className="text-[14px] md:text-base text-black-black/70 mr-16">Are you looking for a way to improve your well-being, happiness, and productivity? Do you want to learn how to cope with stress, anxiety, and depression? Do you want to discover the best practices for nutrition, fitness, and mindfulness?
                        If you answered yes to any of these questions, then you are in the right place. WellnEase is a platform that helps you achieve optimal health by providing you with personalized guidance, support, and resources.
                    </p>
                </div>
                <div className={`${user ? "hidden" : "py-5 space-x-3"}`}>
                    <Link
                        to={'sign-in'}
                        className=" px-6 py-2 text-white-White font-semibold bg-black-black rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer dark:bg-white-White dark:text-black-black"
                    >
                        Sign In
                    </Link>
                    <Link
                        to={'sign-up'}
                        className=" px-6 py-2 text-white-White font-semibold bg-red-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-pink-200 hover:cursor-pointer"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
            <div className="lg:col-span-6">
                <img src={heroImg} alt="" className='rounded-[18px]' />
            </div>
        </div>
    )
}

export default Hero