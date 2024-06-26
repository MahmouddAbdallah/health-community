import { useCallback, useEffect, useState } from "react"
import Navbar from "../../../components/Navbar"
import axios from "axios"
import { useParams } from "react-router-dom"
import convetDate from "../../../utils/convertDate"
import Comments from "../components/Comments"
import ImgOrAva from "../../../components/ImgOrAva"
import ArticleLoading from "../../../components/loading/ArticleLoading"

const Article = () => {
    const { id } = useParams()
    const [article, setArticle] = useState()
    const fetchArticleData = useCallback(
        async () => {
            try {
                const { data } = await axios.get(`/api/blog/article/${id}`)
                // setArticle(data)
                setArticle(data.article)
            } catch (error) {
                console.log(error);
            }
        }, [id]
    )
    useEffect(() => {
        if (!article) {
            fetchArticleData()
        }
    }, [article, fetchArticleData])

    return (
        <div className="pb-10">
            <Navbar />
            <div>
                {article ?
                    <article>
                        <div className="flex flex-col-reverse py-10 md:py-0 gap-10 md:gap-0 md:grid grid-cols-12 bg-[#F5F5F5]">
                            <div className="col-span-6 px-5 md:px-0  pl-4 sm:pl-3 md:pl-5 lg:pl-10 xl:pl-20">
                                <div className="h-full flex items-center">
                                    <div className="space-y-5">
                                        <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{article.title}</h3>
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <ImgOrAva
                                                    className={'w-16 h-16'}
                                                    img={article.user.picture}
                                                    name={article.user.name}
                                                />
                                            </div>
                                            <div>
                                                <span className="block font-medium">{article.user.name}</span>
                                                <span className="block font-medium">{convetDate(article.createdAt)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <img className="w-full" src={article.img} alt="" />
                            </div>
                        </div>
                        <div className="pcontainer py-20">
                            <div className="md:px-5 lg:px-32 xl:px-60">
                                <span className="lg:text-lg">
                                    {article.description}
                                </span>
                            </div>
                        </div>
                        <div className="pcontainer ">
                            <div className="md:px-5 lg:px-32 xl:px-60">
                                <div>
                                    <div className="space-y-10">
                                        {article.content?.map(
                                            item => (
                                                <div key={item._id}>
                                                    <div className="space-y-10">
                                                        <div className={`${item.img ? "space-y-10" : ""}`}>

                                                            <span className="text-xl md:2xl lg:text-3xl font-medium">{item.title}</span>
                                                            <div className="flex justify-center">
                                                                {item.img && <img src={item.img} alt="" />}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="lg:text-lg">
                                                                {item.content}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <div>
                                        <Comments articleId={id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    : <ArticleLoading />
                }
            </div>
        </div>
    )
}

export default Article