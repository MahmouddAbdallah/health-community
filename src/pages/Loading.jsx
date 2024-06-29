import LogoWithoutText from '../assets/LogoWithoutText.svg'
import { WellnEaseTextIcon } from '../components/icons'
const Loading = () => {
    return (
        <div className="h-svh w-full flex justify-center items-center">
            <div className='flex flex-col items-center gap-3'>
                <img className="animate-bounce" src={LogoWithoutText} alt='' />
                <WellnEaseTextIcon />
            </div>
        </div>
    )
}

export default Loading