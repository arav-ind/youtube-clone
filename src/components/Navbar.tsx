import { GiHamburgerMenu } from 'react-icons/gi'
import { BsCameraVideo } from 'react-icons/bs'
import { IoMdApps } from 'react-icons/io'
import AppLogo from './AppLogo'
import SearchBar from './SearchBar'
import Notification from './Notification'
import UserInfo from './UserInfo'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50'>
            <div className='flex gap-8 items-center text-2xl'>
                <GiHamburgerMenu />
                <AppLogo />
            </div>
            <SearchBar />
            <div className='flex gap-5 items-center text-xl'>
                <BsCameraVideo />
                <IoMdApps />
                <Notification numberOfNotifications={0} />
                <UserInfo />
            </div>
        </div>
    )
}

export default Navbar
