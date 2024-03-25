// import styles from './topmenu.module.css'
// import Image from 'next/image';
// import TopMenuItem from './TopMenuItem';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import {Link} from '@mui/material'

// export default async function TopMenu(){

//         const session = await getServerSession(authOptions);
//         session? console.log("Login sucess"):console.log("Login fail")
//         console.log("Session:", session);
//         return (
//             <div className={styles.menucontainer}>
//                 <Image src={'/img/monkey.jpg'} className={styles.logoimg} alt='logo'
//                 width={0} height={0} sizes='100vh'/>
//                 <TopMenuItem title='User' pageRef='/user'/>
//                 <TopMenuItem title='Booking' pageRef='/booking'/>
//                 <TopMenuItem title='About' pageRef='/about'/>
//                 <div className='flex flex-row absolute right-0 h-full'>
//                 <TopMenuItem title='My Booking' pageRef='/mybooking'/>
//                 {
//                     session? <Link href="/api/auth/signout">
//                         <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
//                         Sign-Out of {session.user?.name}</div></Link>
//                     : <Link href="/api/auth/signin"><div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
//                         Sign-In</div></Link>
//                 }
//                 </div>
//             </div>
//         );
// }


////////////////////////////////////------------------------------
// 'use client'

// import { useState, useEffect } from 'react';
// import styles from './topmenu.module.css';
// import Image from 'next/image';
// import TopMenuItem from './TopMenuItem';
// import { Session, getServerSession } from 'next-auth';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import { Link } from '@mui/material';

// export default function TopMenu() {
//     const [session, setSession] = useState<Session | null>(null);

//     useEffect(() => {
//         const fetchSession = async () => {
//             const session = await getServerSession(authOptions);
//             setSession(session);
//             console.log(session ? "Login success" : "Login fail");
//         };
//         fetchSession();
//     }, []);

//     return (
//         <div className={styles.menucontainer}>
//             <Image src={'/img/monkey.jpg'} className={styles.logoimg} alt='logo'
//                 width={0} height={0} sizes='100vh' />
//             <TopMenuItem title='User' pageRef='/user' />
//             <TopMenuItem title='Booking' pageRef='/booking' />
//             <TopMenuItem title='About' pageRef='/about' />
//             <div className='flex flex-row absolute right-0 h-full'>
//                 <TopMenuItem title='My Booking' pageRef='/mybooking' />
//                 {session ? (
//                     <Link href="/api/auth/signout">
//                         <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
//                             Sign-Out of {session.user?.name}
//                         </div>
//                     </Link>
//                 ) : (
//                     <Link href="/api/auth/signin">
//                         <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
//                             Sign-In
//                         </div>
//                     </Link>
//                 )}
//             </div>
//         </div>
//     );
// }

//////////////------------------

'use client'

import { useEffect, useState } from 'react';
import styles from './topmenu.module.css';
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
// import { getSession } from 'next-auth/client';
import { Link } from '@mui/material';

export default function TopMenu() {
  const [session, setSession] = useState<any>(null);

  const fetchSession = async () => {
    try {
      const response = await fetch('/api/session');
      const { session } = await response.json();
      setSession(session);
      console.log(session ? "Login success" : "Login fail");
    } catch (error) {
      console.error("Error fetching session:", error);
    }
  };

  return (
    <div className={styles.menucontainer}>
      <Image src={'/img/monkey.jpg'} className={styles.logoimg} alt='logo'
        width={0} height={0} sizes='100vh' />
      <TopMenuItem title='User' pageRef='/user' />
      <TopMenuItem title='Booking' pageRef='/booking' />
      <TopMenuItem title='About' pageRef='/about' />
      <div className='flex flex-row absolute right-0 h-full'>
        <TopMenuItem title='My Booking' pageRef='/mybooking' />
        {session ? (
          <Link href="/api/auth/signout">
            <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
              Sign-Out of {session.user?.name}
            </div>
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
              Sign-In
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
