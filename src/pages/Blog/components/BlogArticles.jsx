import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const BlogArticles = () => {
    const [articles, setArticles] = useState()
    const fetchArticlesData = async () => {
        try {
            const { data } = await axios.get('/api/blog/article')
            setArticles(data.articles)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (!articles) {
            fetchArticlesData()
        }
    }, [articles])
    const sliceText = (text, number) => {
        return text.slice(0, number)
    }
    return (
        <div className="pcontainer py-10 space-y-10">
            <h4 className="text-xl md:text-2xl lg:text-3xl font-medium">Read some Articles</h4>
            <div>
                <div className="grid grid-cols-12 space-y-10 md:space-y-0 md:gap-5 lg:gap-14">
                    {
                        articles?.map(((item, index) => {
                            return (
                                index != 0 &&
                                <div key={item._id} className="col-span-12 lg:col-span-4 border-2 rounded-md overflow-hidden">
                                    <div className="space-y-5 block">
                                        <div>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="space-y-2 px-3 pb-5">
                                            <div className="w-fit text-xs font-medium px-2 py-1 border rounded-full">
                                                {item.category.name}
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className=" font-medium">{item.title}</h4>
                                                <div className="space-y-3">
                                                    <div className="text-sm text-black-black/70">
                                                        {sliceText(item.description, 200)}...
                                                    </div>
                                                    <Link to={`/blog/articles/${item._id}`} className="block w-fit bg-primary-blue text-white-White px-3 py-2 rounded-full">
                                                        Read more
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }))
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogArticles