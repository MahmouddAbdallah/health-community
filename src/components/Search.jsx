import { SearchIcon } from './icons'
import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { Loader2, XIcon } from "lucide-react"
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import useKeyboardNav from '../hook/useKeyboardNav'
import clsx from 'clsx'
import useCloseOnOutsideClick from '../hook/useCloseOnOutsideClick'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'

const Search = ({ width, placeholder, type }) => {
    const [search, setSearch] = useState(null);
    const [open, setOpen] = useState(false)
    const [keyword, setKeyword] = useState('')
    const [loading, setLoading] = useState('')
    const [searchParams] = useSearchParams();
    const inputValue = searchParams.get('keyword')
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    const fetchSearch = useCallback(
        async () => {
            try {
                if (keyword) {
                    setLoading(true)
                    const { data } = await axios.get(`/api/search-keyword?keyword=${keyword}&fields=keyword,type,-_id&limit=3`)
                    setSearch(data.search)
                    setOpen(true)
                    setLoading(false)
                } else {
                    setSearch(null)
                    setOpen(false)
                    setLoading(false)
                }
            } catch (error) {
                console.error(error);
                setLoading(false)
            }
        }, [keyword]
    )

    useEffect(() => {
        fetchSearch()
    }, [fetchSearch])

    const [foucsIndex, setFocusedIndex] = useKeyboardNav(search?.length, search)
    const searchRef = useCloseOnOutsideClick(() => {
        setOpen(null)
        setFocusedIndex(-1)
    })
    return (
        <form
            ref={searchRef}
            onSubmit={handleSubmit(
                (data) => {
                    navigate(`/search?keyword=${data.keyword}&type=${type || 'default'}`)
                    window.location.reload()
                }
            )} className="w-full flex justify-center " >
            <div className={`"relative flex ${width}`}>
                <div className={clsx(
                    "relative z-20 flex justify-center items-center",
                    { 'w-full sm:w-[400px] md:w-[450px] lg:w-[550px]': pathname.includes('search') },
                    { 'w-[320px] sm:w-[400px] md:w-[450px] lg:w-[550px]': !pathname.includes('search') }
                )}>
                    <input
                        {...register(
                            'keyword',
                            {
                                value: inputValue,
                                onChange: (e) => {
                                    setKeyword(e.target.value)
                                }
                            }
                        )}
                        type="text"
                        placeholder={placeholder || "Search for doctors, or anything?"}
                        className="w-full border focus:border-blue-500 border-black-black/30 py-3 rounded-full pl-8 pr-2 outline-none peer"
                    />
                    <SearchIcon className={"absolute left-2 fill-black-black/50 w-5 h-5 peer-focus:fill-blue-500"} />
                    {loading && <Loader2 className={"absolute animate-spin right-2 size-4 "} />}
                    {(keyword && !loading) &&
                        <XIcon
                            onClick={() => {
                                setOpen(false)
                                setKeyword('')
                            }}
                            className={"absolute right-2 size-4 cursor-pointer"}
                        />
                    }
                    {
                        open &&
                        <div className="w-full absolute -z-20 top-5 bg-white-White pt-10 pb-3 rounded-b-xl rounded-t-md border">
                            {search?.map((item, index) => {
                                const isFocused = index === foucsIndex;
                                return (
                                    <Link
                                        key={item._id}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setFocusedIndex(-1)
                                            setOpen(false)
                                            navigate(`/search?keyword=${item.keyword}&type=${item.type}`);
                                        }}
                                        className={clsx(
                                            "block",
                                            { 'border-blue-500 border': isFocused }
                                        )}
                                        to={`/search?keyword=${item.keyword}&type=${item.type}`}
                                    >
                                        <div className="flex gap-3 py-3 px-3">
                                            <SearchIcon className={'size-5'} />
                                            <div>
                                                <span>
                                                    {item.keyword}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                            )}
                        </div>
                    }
                </div>
            </div>
        </form>
    )
}

Search.propTypes = {
    width: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string
}

export default Search