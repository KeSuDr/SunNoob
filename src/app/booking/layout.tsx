import BookingMenu from "@/components/BookingMenu"
import styles from './booking.module.css'

export default function BookingLayout ({children}:{children:React.ReactNode}){
    return(
        <div className={styles.sectionlayout}>
            <BookingMenu/>
            {children}
        </div>
    )

}