import { BsBell } from 'react-icons/bs'

const Notification = () => {
    return (
        <div className='relative'>
            <BsBell />
            <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1 '>+9</span>
        </div>
    )
}

export default Notification
