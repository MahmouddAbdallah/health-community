import BodyMessage from './components/BodyMessage'
import InputMessage from './components/InputMessage'
import Siderbar from './components/Siderbar';

const Messages = () => {
    return (
        <div className='flex h-[calc(100svh-64px)] lg:h-svh border-t'>
            <div className='flex-1 h-[calc(100svh-64px)] overflow-auto lg:h-svh flex flex-col justify-between'>
                <BodyMessage />
                <InputMessage />
            </div>
            <Siderbar />
        </div>
    )
}

export default Messages