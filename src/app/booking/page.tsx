"use client"

import DateReserve from "@/components/DateReserve";
import { TextField,FormControl, Select, Button } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";

export default function BookingPage(){

    // const urlParams = useSearchParams()
    // const cid = urlParams.get('id')
    // const name = urlParams.get('name')
    // const surname = urlParams.get('surname')

    const [cid, setCid] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    

    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = () => {
        if(cid && name && surname && dentist && bookDate) {
            const item:BookingItem = {
                name: name,
                surname: surname,
                id: cid,
                dentist: dentist,
                bookDate: dayjs(bookDate).format("YYYY/MM/DD")
            }
            dispatch(addBooking(item))
        }
    }

    const [bookDate, setBookDate] = useState<Dayjs|null>(null)
    const [dentist, setDentist] = useState<string>('hello')

    const message = `Name: ${name}\nSurname: ${surname}\nID: ${cid}\nDentist: ${dentist}\nBook Date: ${bookDate}`;

//profile display
    // const session = await getServerSession(authOptions)
    // if(!session || !session.user.token) return null

    // const profile = await getUserProfile(session.user.token)
    // var createdAt = new Date(profile.data.createdAt)

    return(
        <main className="w-[100%] flex flex-col items-center space-y-4 ">
            {/* <div className="text-2xl">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2"><tbody>
                <tr><td>Name </td><td>{profile.data.name}</td></tr>
                <tr><td>Email </td><td>{profile.data.email}</td></tr>
                <tr><td>Tel. </td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since </td><td>{createdAt.toString()}</td></tr>
            </tbody></table> */}
            <div className="text-xl font-medium">Vaccine Booking</div>
            <div className="text-xl font-medium">dentist : {name}</div>
            
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Pick-Up Date and Location</div>
                {/* <DateReserve onDateChange={(value:Dayjs)=>{setPickupDate(value)}}
                onLocationChange={(value:string)=>{setPickupLocation(value)}}/> */}
            </div>

            <FormControl>
                <TextField
                    name="Name"
                    label="Name"
                    variant="standard"
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                />
                <TextField
                    name="Lastname"
                    label="Lastname"
                    variant="standard"
                    value={surname}
                    onChange={(e)=>{
                        setSurname(e.target.value)
                    }}
                />
                <TextField
                    name="Citizen ID"
                    label="Citizen ID"
                    variant="standard"
                    value={cid}
                    onChange={(e)=>{
                        setCid(e.target.value)
                    }}
                />
                <DateReserve onDateChange={(value:Dayjs)=>{setBookDate(value)}}
                onLocationChange={(value:string)=>{setDentist(value)}}/>
                <Button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                text-white shadow-sm" name="Book Vaccine" onClick={makeBooking}>
                Book Vaccine
                </Button>
            
            </FormControl>

        </main>
    );
}