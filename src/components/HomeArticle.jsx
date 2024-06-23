import { useDispatch, useSelector } from "react-redux";
import { FETCH_ARTICLES_REQUEST } from "../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomeArticle = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.article.data);

    useEffect(() => {
        if (!data) {
            dispatch({ type: FETCH_ARTICLES_REQUEST });
        }
    }, [dispatch]);
    const firstArticle = data?.articles[0]
    const sliceText = (text, number) => {
        return text.slice(0, number)
    }
    return (
        <div className="bg-[#F5F5F5] pcontainer py-10">
            <h4 className="text-xl md:text-2xl lg:text-3xl font-medium">Read some Articles</h4>
            <div className=" py-10 min-h-[80vh]">
                {data &&
                    <div className="grid grid-cols-12 gap-10">
                        <div className="hidden lg:block col-span-12 lg:col-span-6">
                            <Link to={`/blog/articles/${firstArticle._id}`} className="space-y-5 block">
                                <div>
                                    <img src={firstArticle.img} alt="" />
                                </div>
                                <div>
                                    <div className="space-y-2">
                                        <div className="w-fit text-xs font-medium px-2 py-1 border rounded-full">
                                            {firstArticle.category.name}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium">{firstArticle.title}</h4>
                                            <div className="block">
                                                <div className="text-black-black/70">
                                                    {sliceText(firstArticle.description, 253)}...
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <div className="grid grid-cols-12 space-y-10 md:space-y-0 md:gap-5">
                                {
                                    data?.articles?.map(((item, index) => {
                                        return (
                                            <div key={item._id} className={`col-span-12 md:col-span-6 lg:col-span-6 ${index != 0 ? "block" : "block lg:hidden"}`}>
                                                <Link to={`/blog/articles/${item._id}`} className="space-y-5 block">
                                                    <div>
                                                        <img src={item.img} alt="" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="w-fit text-xs font-medium px-2 py-1 border rounded-full">
                                                            {item.category.name}
                                                        </div>
                                                        <div>
                                                            <h4 className="text-sm font-medium">{item.title}</h4>
                                                            <div className="block">
                                                                <div className="text-xs text-black-black/70">
                                                                    {sliceText(item.description, 80)}...
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }))
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default HomeArticle