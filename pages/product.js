import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import idk from '../public/home_img.png'
const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  const [ pin, setPin] = useState()
  const [ service, setService] = useState()
  const checkService = async() => {
    let pins = await fetch('http://localhost:3000/api/pincode')
    let pinJson = await pins.json()
    if(pinJson.includes(parseInt(pin))){
      setService(true)
    }
    else{
      setService(false)
    }
    
    }
    const ok = (e) => {
      setPin(e.target.value)
  }
  return <>
     <Head>
        <title>EcoThreads | Products</title>
        <meta name="description" content="A Sustainable Fashion Firm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

<section className=" body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/> */}
      <Image className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded' src={idk} alt="hey"></Image>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">ecoThreads</h2>
        <h1 className=" text-3xl title-font font-medium mb-1">Ecological Tshirt</h1>
       
        <p className="leading-relaxed">EcoThreads offers affordable, ethically made, and long-lasting fashion products, collaborating with independent designers and artisans worldwide. We  donate a portion of our profits to charitable organizations supporting sustainability, social justice, and animal welfare. EcoThreads invites customers to join their mission of creating a sustainable, equitable, and just fashion industry.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border border-gray-700 focus:ring-2 focus:ring-primary-color bg-transparent appearance-none py-2 focus:outline-none focus:border-primary-color  pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        <div className="flex justify-between">
          <span className="title-font font-medium text-2xl mr-20 ">$58.00</span>
          <input placeholder='Enter your pincode' onChange={ok} type="text" name="" id="" className='border-2 border-primary-color rounded-xl px-4'/>
          <button onClick={checkService} className="flex justify-center items-center text-white bg-primary-color border-2 border-primary-color w-32 h-10  text-sm rounded-xl">Check Pincode</button>
        </div>
        <div className="flex justify-between ml-52">
          {!service && service !=null && <p className="text-red-600">Pincode Not Found!</p>}
          {(service && service !=null) && <p className="text-green-600">Pincode Found!</p>}
        </div>
      </div>
    </div>
  </div>
</section>
  </>
}

export default Post