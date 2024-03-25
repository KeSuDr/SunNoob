'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './banner.module.css';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function Banner(){
    const covers = ['/img/cover.jpg','/img/cover1.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()

    return(
        <div className={styles.banner} onClick={()=>{ setIndex(index+1)}}>
            <Image src={covers[index%2]}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>Vaccine Service Center</h1>
                <h3 className='text-xl font-serif'>Protect Yourself, Protect The World</h3>
            </div>
            
            
        </div>
    );
}