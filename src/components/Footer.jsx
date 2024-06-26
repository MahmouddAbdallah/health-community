import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import { LinkedinIcon, FacebookIcon, TwitterIcon } from 'lucide-react'

const Footer = () => {
    const items = [
        {
            head: 'Company',
            sub: [
                {
                    text: 'Product',
                    link: '/store/search'
                },
                {
                    text: 'shopping',
                    link: '/store'
                },
                {
                    text: 'Blog',
                    link: '/blog'
                },
            ]
        },
        {
            head: 'Resource',
            sub: [
                {
                    text: 'Product',
                    link: '/store/search'
                },
                {
                    text: 'shopping',
                    link: '/store'
                },
                {
                    text: 'Blog',
                    link: '/blog'
                },
                {
                    text: 'Product',
                    link: '/store/search'
                },
            ]
        },
        {
            head: 'Join Our',
            sub: [
                {
                    text: 'Whatsapp',
                    link: '/store/search'
                },
                {
                    text: 'facebook',
                    link: '/store/search'
                },
                {
                    text: 'shopping',
                    link: '/store'
                },
                {
                    text: 'Blog',
                    link: '/blog'
                },
            ]
        },
    ]
    return (
        <footer className="bg-white-White pcontainer py-10">
            <div className="grid grid-cols-12 gap-0 lg:gap-10 space-y-10 lg:space-y-0">
                <div className="col-span-12 md:col-span-6 lg:col-span-4 space-y-5">
                    <img className="w-[200px] md:w-[248px]" src={Logo} alt="" />
                    <span className='block text-black-black/50'>
                        WellnEase is the best health platform to trust to work with it you can follow us to know more,
                        It’s a movement that aims to inspire, educate, and motivate people to live healthier and happier lives.
                    </span>
                    <div className='flex gap-3'>
                        <Link className='block'>
                            <LinkedinIcon className='fill-blue-500 stroke-blue-500' />
                        </Link>
                        <Link className='block'>
                            <FacebookIcon className='fill-blue-500 stroke-blue-500' />
                        </Link>
                        <Link className='block'>
                            <TwitterIcon className='fill-blue-500 stroke-blue-500' />
                        </Link>
                    </div>
                </div>
                {items.map((item,) => (
                    <div key={item.head} className='col-span-12 md:col-span-4 lg:col-span-2 space-y-5'>
                        <h4 className='text-2xl font-semibold'>{item.head}</h4>
                        <ul className='space-y-3'>
                            {item.sub.map((sub) => (
                                <li key={sub.text} className=''>
                                    <Link to={sub.link} className='text-[#1E195F] hover:text-black-black'>
                                        {sub.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer