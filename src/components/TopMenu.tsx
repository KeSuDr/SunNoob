import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import {Link} from '@mui/material'

export default async function TopMenu(){

        // const session = await getServerSession(authOptions);
        return (
            <div className={styles.menucontainer}>
                <Image src={'/img/monkey.jpg'} className={styles.logoimg} alt='logo'
                width={0} height={0} sizes='100vh'/>
                {/* <TopMenuItem title='Dentist' pageRef='/dentist'/> */}
                <TopMenuItem title='Booking' pageRef='/booking'/>
                <TopMenuItem title='About' pageRef='/about'/>
                {/* <div className='flex flex-row absolute left-0 h-full'>
                {
                    session? <Link href="/api/auth/signout">
                        <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                        Sign-Out of {session.user?.name}</div></Link>
                    : <Link href="/api/auth/signin"><div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                        Sign-In</div></Link>
                }
                <TopMenuItem title='My Booking' pageRef='/mybooking'/>
                </div> */}
            </div>
        );
}
