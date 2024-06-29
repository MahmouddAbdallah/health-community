import { useSelector } from "react-redux"
import { sliceText } from "../../../utils/sliceText";
import { Link } from "react-router-dom";

const Articles = () => {
    const articles = useSelector(state => state.search.data.article)
    return (
        <div className="lg:w-1/2">
            {
                articles.map(
                    (article) => (
                        <Link to={`/blog/articles/${article._id}`} key={article._id}>
                            <div className="flex flex-col sm:flex-row gap-3 group">
                                <div>
                                    <div className="w-full md:w-60">
                                        <img className="rounded-md w-full" src={article.img} alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 group-hover:text-blue-600 group-hover:underline">
                                    <div>
                                        <h2 className="font-medium md:text-xl">{article.title}</h2>
                                        <p className="text-sm">{sliceText(article.description, 120)}</p>
                                    </div>
                                    <div className="text-xs">Powerd by <span className="font-medium underline">Mahmoud Mohamed</span></div>
                                </div>
                            </div>
                        </Link>
                    )
                )
            }
        </div>
    )
}

export default Articles