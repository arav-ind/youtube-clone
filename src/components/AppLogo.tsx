import { BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const AppLogo = () => {
    return (
        <Link to='/'>
            <div className='flex justify-center gap-1 items-center'>
                <BsYoutube className='text-3xl text-red-600' />
                <span className='text-xl font-medium'>YouTube</span>
            </div>
        </Link>
    )
}

export default AppLogo
