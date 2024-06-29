/* eslint-disable no-unused-vars */
import NavbarSearch from './components/NavbarSearch'
import Articles from './components/Articles'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { FETCH_SEARCH_REQUEST } from '../../redux/actions';
import Doctors from './components/Doctors';
const SearchPage = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    const type = searchParams.get('type');
    const search = useSelector((state) => state.search)
    console.log(search);
    useEffect(() => {
        dispatch({ type: FETCH_SEARCH_REQUEST, payload: { keyword, type } })
    }, [dispatch, keyword, type])
    return (
        <div>
            <NavbarSearch />
            <div className="py-5 space-y-5 pcontainer bg-gray-50 min-h-[calc(100svh-80px)]">
                <h4 className='text-lg font-medium'>The Result :</h4>
                <div>
                    {search?.data?.article && <Articles />}
                    {search?.data?.doctor && <Doctors />}
                </div>
            </div>
        </div>
    )
}

export default SearchPage