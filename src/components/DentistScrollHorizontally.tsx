'use client'
import React from 'react';
import DentistInformation from "./DentistInformation";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function DentistScrollHorizontally() {
    const DentistData = [
        { _id: "11", name: "pol", year_of_experience: 1, area_of_experience: "abc", medical_fee: 12, id: "11" },
        
    ];

    const slideLeft = () => {
        const slider = document.getElementById('slider') as HTMLElement;
        slider.scrollLeft -= 500;
    }

    const slideRight = () => {
        const slider = document.getElementById('slider') as HTMLElement;
        slider.scrollLeft += 500;
    }

    return (
        <div className="relative items-center m-auto p-auto flex">
            <MdChevronLeft size={100} onClick={slideLeft} className='opacity-50 cursor-pointer hover:opacity-100' />
            <div id='slider' className="scrollbar-hide flex flex-no-wrap overflow-x-scroll scroll-smooth items-start mb-8 scrollbar-hide">
                {DentistData.map((Dentist) => (
                    <DentistInformation key={Dentist._id} id={Dentist.id} name={Dentist.name} year_of_experience={Dentist.year_of_experience} area_of_experience={Dentist.area_of_experience} medical_fee={Dentist.medical_fee} />
                ))}
            </div>
            <MdChevronRight size={100} onClick={slideRight} className='opacity-50 cursor-pointer hover:opacity-100' />
        </div>
    )
}


