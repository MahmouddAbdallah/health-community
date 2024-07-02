import AddPost from './components/AddPost';
import Doctor from './components/Doctor';
import Posts from './components/Posts';
const Community = () => {
    return (
        <div className="min-h-svh pcontainer py-10">
            <div className='flex'>
                <div>
                    <div className='sticky z-20 top-32 shadow-md py-10 px-10 rounded-xl border'>
                        <Doctor />
                    </div>
                </div>
                <div className="w-full flex justify-center flex-1">
                    <div className="w-[550px]">
                        <AddPost />
                        <Posts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community