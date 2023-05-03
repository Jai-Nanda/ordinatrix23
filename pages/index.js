import Head from 'next/head'
import Image from 'next/image'
import home_img from '../public/home_img.png'
import Footer from './components/Footer'
import Link from 'next/link'
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
        {/* <Image className='w-full h-[90vh]' src={home_img} alt='hey'></Image> */}   
        <div className='w-full h-[90vh]' style={{
          backgroundImage: `url(/home_img.png)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className='flex flex-col  text-white   pt-60 pl-20'>
            <h1 className='font-medium text-5xl max-w-[640px]  uppercase'>big summer sale!
            </h1>
            <h1 className='font-medium text-5xl max-w-[500px] mt-2  uppercase'> upto 50% off on select items

            </h1>
          </div>
          </div>

          <div className='w-full h-[90vh]' style={{
            backgroundImage: `url(/home2.png)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <div className='flex flex-col text-[#CFFFCB]   pt-60 pl-20'>
              <h1 className='font-medium text-5xl max-w-[640px]  uppercase text-[#CFFFCB] '>FARMER’S CONNECT</h1>
              <p className='max-w-lg mt-5'>DONATE CLOTHES AND GET REWARDS THROUGH OUR SPECIAL FARMER’S CONNECT PROGRAM. WE HERE AT ECOTHREADS ARE CONNECTED VERY CLOSELY WITH THE FARMERS WHO SUPPLY OUR ORGANIC FIBRES AND TRY AND GIVE BACK TO THEM IN A SPECIAL WAY.</p>
              <div className="flex ">
              <Link href={"/"}k>
               <button className='border-2 upprcase w-44 h-12 rounded-2xl mt-5 ml-5  text-[#CFFFCB]  border-[#CFFFCB]'>Donte clothes</button>
              </Link> 
                <button className='border-2 upprcase w-44 h-12 rounded-2xl mt-5 ml-5  text-[#CFFFCB]  border-[#CFFFCB]'>Donate Money</button>
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
                <div className=" border-[#CFFFCB] p-10  uppercase ">
                  <Link href="/" className=" border-2 border-[#CFFFCB] mt-3 text-sm font-medium  w-56  rounded-3xl px-6 py-3  text-center">SUBSCRIBE   </Link>
                </div>
              </div>

            </div>

          </main>
          <Footer />
        </>
        )
}
