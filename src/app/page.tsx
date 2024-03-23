import Image from 'next/image'
import DentistInformation from '@/components/DentistInformation'
import DentistScrollHoricontally from '@/components/DentistScrollHorizontally'

export default function Home() {
  return (
    <main className="container px-4 flex-grow w-full py-4 sm:py-16 mx-auto px-24">
      <DentistScrollHoricontally/>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <DentistInformation name="หมอปลา" year_of_experience={999} area_of_experience="หมอผี" medical_fee={10}></DentistInformation>
      </div>
    </main>
  ) 
}
