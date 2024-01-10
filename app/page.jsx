import Header2 from '@/components/Header2'
import Header from '../components/Header'
import Header3 from '@/components/Header3'
import Image from 'next/image'
import Header4 from '@/components/Header4'
import Footer from '@/components/Footer'
import { cookies } from 'next/headers'
export default function Home() {
  
  const auth =  cookies().get("token")?.value || null;
  return (
    <>
       
   <div className="wrapper min-h-screen">
   <Header auth={auth}></Header>
    <Header2></Header2>
    <Header3></Header3>
    {/* banner section */}
    <div className="mx-20 my-14">
    <Image width={200} height={200} className='h-70 w-full' src={"/images/banner.avif"}></Image>
    </div>

    <div className="mb-14 mx-20">
    <Image width={200} height={200} className='h-70 w-full' src={"/images/banner2.avif"}></Image>
    </div>
    <Header4></Header4>
   </div>
    <Footer></Footer>
    
    
    </>
 
  )
}
