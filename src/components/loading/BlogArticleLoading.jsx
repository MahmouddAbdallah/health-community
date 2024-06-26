
const BlogArticleLoading = () => {
    return (
        <div className=" min-h-[80vh]">
            <div className="grid grid-cols-12 lg:gap-10">
                <div className="hidden lg:block col-span-12 lg:col-span-6">
                    <div className="space-y-5 block">
                        <div className="h-60 lg:h-[450px] bg-slate-200 animate-pulse rounded-md" />
                        <div className="space-y-2">
                            <div className="text-sm font-medium h-3 w-60 bg-slate-200 animate-pulse" />
                            <div className="text-xs text-black-black/70 w-72 h-3 bg-slate-200" />
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="grid grid-cols-12 space-y-10 md:space-y-0 md:gap-5">
                        {
                            Array(5).fill()?.map(((_, index) => {
                                return (
                                    <div key={index} className={`col-span-12 md:col-span-6 lg:col-span-6 ${index != 0 ? "block" : "block lg:hidden"}`}>
                                        <div className="space-y-5 block">
                                            <div className="h-56 bg-slate-200 animate-pulse rounded-md" />
                                            <div className="space-y-2">
                                                <div className="text-sm font-medium h-3 w-44 bg-slate-200 animate-pulse" />
                                                <div className="text-xs text-black-black/70 w-60 h-3 bg-slate-200" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogArticleLoading