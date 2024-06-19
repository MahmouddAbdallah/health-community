// import PropTypes from 'prop-types'
import InputImgFile from '../../../components/InputImgFile'
// import { UseAppContext } from '../../../context/AppContext'
// import ImgOrAva from '../../../components/ImgOrAva'
// const HeaderProfile = ({ userData }) => {
//     const { user } = UseAppContext()

//     return (
//         <div className="py-2 sm:py-3 md:py-5 lg:py-10 md:flex md:justify-center">
//             <div className="md:w-[768px] lg:w-[900px] xl:w-[1100px] px-3 pt-3 pb-56 md:pb-36 rounded bg-blue-300 dark:bg-[#212134]">
//                 <div className="relative flex justify-center md:justify-normal">
//                     <div className="h-44 w-full bg-blue-200 dark:bg-blue-50/20 rounded">
//                     </div>
//                     <div className="absolute top-24 flex flex-col items-center md:flex-row md:pl-5">
//                         <div className="md:mb-10">
//                             {
//                                 userData ?
//                                     <div>
//                                         {user?._id == userData?._id ? < InputImgFile /> :
//                                             <ImgOrAva
//                                                 className={'w-40 h-40 text-2xl'}
//                                                 img={userData.picture}
//                                                 name={userData.name}
//                                                 color={'bg-blue-400'}
//                                             />
//                                         }
//                                     </div> :
//                                     <div className="w-40 h-40 bg-slate-200 dark:bg-gray-500 animate-pulse" />
//                             }
//                         </div>
//                         <div className="flex flex-col items-center md:items-start  md:pl-3 md:pt-[70px]">
//                             <div className="mt-3">
//                                 <h3 className="text-lg font-semibold md:text-xl text-black-black/90 dark:text-white-White">
//                                     {userData?.name ? userData?.name : <div className="w-32 h-5 rounded bg-slate-200 dark:bg-gray-500 animate-pulse" />}
//                                 </h3>
//                                 <div className="text-center mt-2 md:text-start text-black-black/90 dark:text-white-White">
//                                     <span className="text-lg">
//                                         {userData?.role ? userData?.role.toUpperCase() : <div className="w-16 h-5 mx-auto rounded bg-slate-200 dark:bg-gray-500 animate-pulse" />}
//                                     </span>
//                                 </div>
//                             </div>
//                             <div className="flex gap-5 mt-4">
//                                 {
//                                     user?._id == userData?._id ? "" :
//                                         <>
//                                             <button
//                                                 // onClick={addFollow}
//                                                 className="bg-gray-900 text-white-White dark:bg-blue-700  px-7 py-1 rounded-md md:px-12 dark:text-white-White">+ Follow</button>
//                                             <button className="px-7 py-1 rounded-md dark:bg-gray-900 md:px-12 dark:text-white-White border border-black-black dark:border-white-White">Message</button>
//                                         </>
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// HeaderProfile.propTypes = {
//     userData: PropTypes.object
// }

// export default HeaderProfile
import PropTypes from 'prop-types'
// import { UseAppContext } from '../../../context/AppContext'
import BioInfo from './BioInfo'
const HeaderProfile = ({ userData }) => {
    // const { user } = UseAppContext()
    // console.log(userData);
    return (
        <div className='flex justify-center px-5'>
            <div className='w-full md:w-[768px] lg:w-[900px] xl:w-[1000px]'>
                <div className=' w-full py-10'>
                    <div className='p-5 rounded-lg border-2'>
                        <div className='w-full grid grid-cols-12 space-y-10 md:space-y-0 md:gap-10'>
                            <div className='col-span-12 md:col-span-4'>
                                <InputImgFile imgUrl={userData?.picture} />
                            </div>
                            <div className='col-span-12 md:col-span-8'>
                                <div className='h-full flex flex-col gap-3 justify-between'>
                                    <div className='space-y-5'>
                                        <h3 className='text-xl md:text-2xl lg:text-4xl font-bold'>{userData?.name}</h3>
                                        <BioInfo userId={userData?._id} specialization={userData?.specialization} />
                                    </div>
                                    <button className='bg-blue-500 w-fit px-5 py-2 text-white-White rounded-full'>
                                        Book appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

HeaderProfile.propTypes = {
    userData: PropTypes.object
}

export default HeaderProfile