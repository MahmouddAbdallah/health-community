
const StoreCategoryLoading = () => {
    return (
        <div className="grid grid-cols-12 space-y-5 md:space-y-0 md:gap-5">
            {
                Array(12).fill().map((_, i) =>
                    <div className="block col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" key={i}>
                        <div className='w-full flex flex-col items-center px-5 space-y-2'>
                            <div className='w-full h-32 rounded-md object-contain bg-slate-200 animate-pulse' />
                            <div className="text-center font-medium text-sm w-10/12 h-3 bg-slate-200 animate-pulse" />
                        </div>
                    </div>
                )
            }
        </div>

    )
}

export default StoreCategoryLoading