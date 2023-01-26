import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { TiMicrophone } from 'react-icons/ti'

const SearchBar = () => {
    return (
        <div className='flex items-center justify-center gap-5'>
            <form>
                <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0'>
                    <div className='flex gap-4 items-center pr-5'>
                        <div>
                            <AiOutlineSearch className='text-xl' />
                        </div>
                        <input type='text' className='w-96 bg-zinc-900 focus:outline-none border-none' />
                        <AiOutlineClose className='text-xl cursor-pointer' />
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
