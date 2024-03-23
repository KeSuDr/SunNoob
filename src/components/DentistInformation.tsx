export default function DentistInformation({name,year_of_experience,area_of_experience,medical_fee}:{name:string,year_of_experience:number,area_of_experience:string,medical_fee:number}){
    return(
    <div className="max-w-sm bg-white border border-gray-98 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src="/img/Dentist.jpeg" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </a>
            <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <h1>ชำนาญ {area_of_experience}</h1>
                <h1>ประสบการณ์ {year_of_experience} ปี</h1>
                <h1>ค่ารักษา {medical_fee} บาท</h1>
            </div>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                จองเลย
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
    )
}