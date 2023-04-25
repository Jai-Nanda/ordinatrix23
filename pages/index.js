import Head from 'next/head'
import Image from 'next/image'
import home_img from '../public/home_img.png'
import Footer from './components/Footer'
export default function Home() {
  return (
    <>
      <Head>
        <title>EcoThreads</title>
        <meta name="description" content="A Sustainable Fashion Firm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className=''>
        <Image className='w-full h-[90vh]' src={home_img}></Image>
        <div className='w-full h-[90vh]' style={{
      backgroundImage: `url(/home2.png)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className='flex flex-col text-[#CFFFCB]   pt-60 pl-20'>
      <h1 className='font-bold text-3xl text-[#CFFFCB] '>FARMER’S CONNECT</h1>
      <p className='max-w-lg'>DONATE CLOTHES AND GET REWARDS THROUGH OUR SPECIAL FARMER’S CONNECT PROGRAM. WE HERE AT ECOTHREADS ARE CONNECTED VERY CLOSELY WITH THE FARMERS WHO SUPPLY OUR ORGANIC FIBRES AND TRY AND GIVE BACK TO THEM IN A SPECIAL WAY.</p>
      <div class=" border-[#CFFFCB] p-10  uppercase ">
                                        <a href="/" class=" border-2 border-[#CFFFCB] mt-3 text-sm font-medium  w-56  rounded-3xl px-6 py-3  text-center">GET STARTED   </a>
                                    </div>
                                    <div class=" border-[#CFFFCB] p-10  uppercase ">
                                        <a href="/" class=" border-2 border-[#CFFFCB]  text-sm font-medium  w-56  rounded-3xl px-6 py-3  text-center">DONATE NOW   </a>
                                    </div>
      </div>
 
      </div>
      <div className='w-full h-[90vh]' style={{
      backgroundImage: `url(/home3.png)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className='flex flex-col justify-center items-center text-[#CFFFCB]   pt-60 '>
      <h1 className='font-bold text-4xl text-[#CFFFCB] '>SIGN UP TO OUR NEWSLETTER!</h1>
      <p className='max-w-lg pt-10'>SUBSCRIBE TO OUR MONTHLY NEWSLETTER WHERE YOU CAN FIND OUT ABOUT THE LATEST DEALS AND FASHION TRENDS COMING UP AT ECOTHREADS.</p>
      <div class=" border-[#CFFFCB] p-10  uppercase ">
                                        <a href="/" class=" border-2 border-[#CFFFCB] mt-3 text-sm font-medium  w-56  rounded-3xl px-6 py-3  text-center">SUBSCRIBE   </a>
                                    </div>
      </div>
 
      </div>

        </main>
        <Footer/>
    </>
  )
}
