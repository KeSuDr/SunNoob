import DentistInformation from "./DentistInformation";
import React from 'react';

export default function DentistScrollHoricontally(){
    const DentistData = [
        {_id:"asdsad",name:"pol",year_of_experience:1,area_of_experience:"abc",medical_fee:12,id:"asdsad"},
        {_id:"asdsad",name:"polas",year_of_experience:1,area_of_experience:"abc",medical_fee:12,id:"asdsad"},
        {_id:"asdsad",name:"polss",year_of_experience:1,area_of_experience:"abc",medical_fee:12,id:"asdsad"},
        {_id:"asdsad",name:"polss",year_of_experience:1,area_of_experience:"abc",medical_fee:12,id:"asdsad"},
        {_id:"asdsad",name:"polss",year_of_experience:1,area_of_experience:"abc",medical_fee:12,id:"asdsad"},
        {_id:"asdsad",name:"polss",year_of_experience:1,area_of_experience:"abc",medical_fee:12,id:"asdsad"},
        {_id:"asdsad",name:"polss",year_of_experience:1,area_of_experience:"abc",medical_fee:12,id:"asdsad"},
        {_id:"asdsad",name:"polss",year_of_experience:1,area_of_experience:"abc",medical_fee:12,id:"asdsad"},
        {_id:"asdsad",name:"polss",year_of_experience:1,area_of_experience:"abc",medical_fee:12,id:"asdsad"},
        {_id:"asdsad",name:"polss",year_of_experience:1,area_of_experience:"abc",medical_fee:12,id:"asdsad"},
    ];

    return (
        <div className="relative items-center m-auto p-auto">
            <div id='slider' className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8">
                {DentistData.map((Dentist)=>(
                    <DentistInformation name={Dentist.name} year_of_experience={Dentist.year_of_experience} area_of_experience={Dentist.area_of_experience} medical_fee={Dentist.medical_fee}/>
                    ))
                }
            </div>
        </div>
    )
}
