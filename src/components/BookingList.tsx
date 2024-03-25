"use client"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeBooking } from "@/redux/features/bookSlice"

export default function BookingList(){

    const bookItems = useAppSelector((state)=> state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        {   
            bookItems.length === 0 ? (
                <div>No Vaccine Booking</div>
            ) : (
                bookItems.map((bookItem) => (
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookItem.id}>
                        <div className="text-xl">{bookItem.name}</div>
                        <div className="text-sm">{bookItem.surname}</div>
                        <div className="text-sm">{bookItem.id}</div>
                        <div className="text-sm">{bookItem.dentist}</div>
                        <div className="text-sm">{bookItem.bookDate}</div>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white mx-7"
                            onClick={() => {dispatch(removeBooking(bookItem.id))}}>
                            Remove Booking
                        </button>
                    </div>
                ))
            )
        }
        </>
    )
}
