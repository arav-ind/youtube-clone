import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { TiMicrophone } from 'react-icons/ti'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { changeSearchTerm, clearSearchTerm, clearVideos } from '../store'
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos'

const SearchBar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm)
    const handleSearch = () => {
        if (location.pathname !== '/search') {
            navigate('/search')
        } else {
            dispatch(clearVideos())
            dispatch(getSearchPageVideos(false))
        }
    }
    return (
        <div className='flex items-center justify-center gap-5'>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSearch()
            }}>
                <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0'>
                    <div className='flex gap-4 items-center pr-5'>
                        <div>
                            <AiOutlineSearch className='text-xl' />
                        </div>
                        <input
                            type='text'
                            className='w-96 bg-zinc-900 focus:outline-none border-none'
                            value={searchTerm}
                            onChange={e => dispatch(changeSearchTerm(e.target.value))}
                        />
                        <AiOutlineClose
                            className={`text-xl cursor-pointer ${!searchTerm ? 'invisible' : 'visible'}`}
                            onClick={() => dispatch(clearSearchTerm())}
                        />
                    </div>
                    <button className='h-10 w-16 flex justify-center items-center bg-zinc-800'>
                        <AiOutlineSearch className='text-xl' />
                    </button>
                </div>
            </form>
            <div className='text-xl p-3 bg-zinc-900 rounded-full'>
                <TiMicrophone />
            </div>
        </div>
    )
}

export default SearchBar
