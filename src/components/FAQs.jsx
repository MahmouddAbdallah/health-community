import { useRef, useState } from 'react'
import FAQsImg from '../assets/FAQs.jpg'
import { ArrowDownIcon } from '../components/icons'
import { ArrowUpIcon } from '../components/icons'
const FAQs = () => {
    const [toggle, setToggle] = useState(false)
    const contentRefs = useRef({});

    const faqsData = [
        {
            q: 'What is WellnEase?',
            a: 'WellnEase is a platform that helps you achieve optimal health by providing you with personalized guidance, support, and resources. Whether you want to lose weight, quit smoking, meditate, or sleep better, WellnEase can help you reach your goals and transform your life.',
        },
        {
            q: 'How does WellnEase work?',
            a: 'WellnEase works by analyzing your data and providing you with personalized recommendations and feedback. You can choose from a variety of topics, themes, and formats to suit your interests and schedule. You can also track your progress, earn rewards, and celebrate your achievements.'
        },
        {
            q: 'What are the benefits of WellnEase?',
            a: 'WellnEase can help you improve your well-being, happiness, and productivity. By using WellnEase, you can: Learn how to cope with stress, anxiety, and depressio Discover the best practices for nutrition, fitness, and mindfulnes Enhance your mood, energy, sleep, and immunit Prevent or manage chronic diseases and condition Connect with other users, join groups, and get feedback from experts'
        },
        {
            q: 'How much does WellnEase cost?',
            a: 'WellnEase is free to join and use. You can access all the features and content on our platform without paying anything. However, if you want to unlock more benefits and perks, you can upgrade to our premium membership for a small fee. Our premium membership offers: Unlimited access to all our topics, themes, and formatsExclusive content, events, and offers from our partners and sponsorsPersonalized coaching and support from our expertsPriority customer service and technical support'
        },
        {
            q: 'How can I sign up for WellnEase?',
            a: 'You can sign up for WellnEase by filling out a simple form on our website. You will need to provide your name, email address, and password. You will also need to answer a few questions about your health and wellness goals, preferences, and lifestyle. This will help us create your profile and customize your experience.'
        },
        {
            q: 'How can I contact WellnEase?',
            a: 'If you have any questions, comments, or feedback, you can contact us by: Emailing us at support@wellnease.com Calling us at 1-800-WELLNEASE Chatting with us on our website or app Following us on social media (Facebook, Twitter, Instagram, etc.)'
        },
    ]
    return (
        <div className="grid grid-cols-12 gap-14 bg-white-Snow_White">
            <div className="col-span-12 lg:col-span-6 pl-4 sm:px-3 md:px-5 lg:pl-10 xl:pl-20  pt-20">
                <div className=" space-y-4 mb-20">
                    <p className='font-semibold text-primary-blue'>FAQs</p>
                    <h3 className="text-3xl lg:text-5xl font-bold">Still Have Any Questions?</h3>
                    <p className="opacity-50">
                        Here are the answers to the most popular ones:
                    </p>
                </div>
                <div>
                    <div>
                        {faqsData.map((item) =>
                            <div key={item.q} className='border-b border-[rgba(0,0,0,0.20)] pb-3'>
                                <div onClick={() => { setToggle((prev) => { if (prev == item.q) { return false } return item.q }) }}
                                    className='flex items-center justify-between py-3 cursor-pointer'>
                                    <h4 className='text-2xl font-bold'>{item.q}</h4>
                                    <div>
                                        {toggle == item.q ? <ArrowUpIcon /> : <ArrowDownIcon />}
                                    </div>
                                </div>
                                <div ref={el => contentRefs.current[item.q] = el}
                                    style={{ maxHeight: toggle === item.q ? `${contentRefs.current[item.q]?.scrollHeight}px` : '0' }}
                                    className="transition-all duration-500 ease-in-out overflow-hidden">
                                    <p className='opacity-50'>
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='hidden lg:block h-[110vh] overflow-hidden lg:col-span-6'>
                <img src={FAQsImg} className='w-full ' alt="" />
            </div>
        </div>
    )
}

export default FAQs