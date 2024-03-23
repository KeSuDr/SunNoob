// import Image from 'next/image'
// import getHospital from '@/libs/getHospital'
// import Link from 'next/link'
// export default async function HospitalDetailPage( {params}: { params: {hid:string}}){
    
//     const hospitalDetail = await getHospital(params.hid)
//     /**
//      *  Mock Data for Demonstration Onlyf
//      */

//     // const mockhospitalRepo = new Map
//     // mockhospitalRepo.set("001", {name: "Chulalongkorn Hospital", image:'/img/chula.jpg'})
//     // mockhospitalRepo.set("002", {name: "Rajavithi Hospital", image:'/img/rajavithi.jpg'})
//     // mockhospitalRepo.set("003", {name: "Thammasat University Hospital", image:'/img/thammasat.jpg'})
    
//     return(
//         <main className="text-center p-5">
//             <h1 className="text-lg font-medium">{hospitalDetail.data.name}</h1>
//             <div className="flex flex-row my-5">
//                 <Image src={ hospitalDetail.data.picture }
//                     alt='Hospital Image'
//                     width={0} height={0} sizes='100vw'
//                     className='rounded-lg w-[30%]'/>
//                     <div className='text-md mx-5 text-left'>{ hospitalDetail.data.name}
//                     <div className='text-md mx-5'>address : { hospitalDetail.data.address}</div>
//                     <div className='text-md mx-5'>district : { hospitalDetail.data.district}</div>
//                     <div className='text-md mx-5'>province : { hospitalDetail.data.province}</div>
//                     <div className='text-md mx-5'>postalcode : { hospitalDetail.data.postalcode}</div>
//                     <div className='text-md mx-5'>tel : { hospitalDetail.data.tel}</div>

//                     <Link href={`/booking?id=${params.hid}&name=${hospitalDetail.data.name}`}>
//                     <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
//                     text-white shadow-sm" name="Book Vaccine">
//                         Book Vaccine
//                     </button>
//                     </Link>

//                     </div>

//             </div>
//         </main>
//     )
// }

// // export async function generateStaticParams() {
// //     return [{hid:'001'},{hid:'002'},{hid:'003'}]
    
// // }