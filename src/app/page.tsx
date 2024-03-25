import Image from 'next/image'
import DentistInformation from '@/components/DentistInformation'
import DentistScrollHoricontally from '@/components/DentistScrollHorizontally'
import Banner from '@/components/Banner'

export default function Home() {
  return (
    <main className="container flex-grow w-full py-4 sm:py-16">
      <Banner/>
      <div className='my-10 mx-auto'>
        <h1>ทีมทันตแพทย์</h1>
        <div className='my-5'>
          <DentistScrollHoricontally/>
        </div>
      </div>
    </main>
  ) 
}
