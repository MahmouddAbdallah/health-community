
const DoctorsLoading = () => {
    return (
        <div className='grid grid-cols-12 space-y-10 md:space-y-0 lg:gap-5'>
            {Array(4)?.fill().map((_, i) => {
                return (
                    <div
                        key={i}
                        className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3'
                    >
                        <div className='block'>
                            <div className='space-y-3 flex flex-col items-center justify-center'>
                                <div>
                                    <div className="w-72 h-72 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full bg-slate-200 animate-pulse" />
                                </div>
                                <div className='flex flex-col items-center gap-2'>
                                    <div className=" w-28 h-2 bg-slate-200 animate-pulse" />
                                    <div className="h-2 w-20 bg-slate-200 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DoctorsLoading