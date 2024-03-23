import Image from 'next/image'
import DentistInformation from '@/components/DentistInformation'
import DentistScrollHoricontally from '@/components/DentistScrollHorizontally'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DentistScrollHoricontally/>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <DentistInformation name="หมอปลา" year_of_experience={999} area_of_experience="หมอผี" medical_fee={10}></DentistInformation>
      </div>
    </main>
  ) 
}
