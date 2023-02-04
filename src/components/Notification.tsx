import { BsBell } from 'react-icons/bs'

interface NotificationProps {
    numberOfNotifications: number
}

const Notification = ({ numberOfNotifications = 0 }: NotificationProps) => {
    return (
        <div className='relative'>
            <BsBell />
            {numberOfNotifications > 0 &&
                <span
                    className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1 '
                >
                    +{numberOfNotifications}
                </span>
            }
        </div>
    )
}

export default Notification
