import Link from "next/link"
import Image from "next/image"
import Footer from "./components/Footer"
import Head from "next/head"
import sh1 from '../public/image 21.png'
import sh2 from '../public/photo.png'
export default function store() {
  return (
    <>
       <Head>
        <title>EcoThreads | Store</title>
        <meta name="description" content="A Sustainable Fashion Firm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
<h1 className='text-4xl text-primary-color tracking-wider font-medium max-w-7xl m-auto uppercase my-10'>your Wishlist</h1>
      <div className="flex justify-between items-center max-w-7xl m-auto">
     
      </div>
      <div className="max-w-7xl m-auto flex items-center">

      <div className=" flex justify-between items-center mb-20 mr-20">
      <div className=" border-2 border-[#007026] flex flex-col justify-center items-center">
      <Image src={sh1} alt="hey" className="mt-10 h-[250px] w-[290px] mx-2" ></Image>
      <div className="flex flex-col justify-center  items-center border-t-2 mt-6 h-24 border-[#007026] w-full ">
        <h2 className="text-xl font-medium">Ecological Tshirt</h2>
        <p className="text-base font-thin uppercase text-gray-600">men’s t shirt</p>
        <div className="flex justify-between items-center">
        <h1 className="font-semibold  text-xl">$22.3</h1>
        </div>
        </div>
        <div className="flex flex-col justify-center  items-center border-t-2 mt-6 h-10 border-[#007026] w-full ">
        <button className="text-gray-600 underline">MOVE TO CART</button>
        </div>
        </div>
      </div>
      <div className=" flex justify-between items-center mb-20">
      <div className=" border-2 border-[#007026] flex flex-col justify-center items-center">
      <Image src={sh2} alt="hey" className="mt-10 h-[250px] w-[290px] mx-2" ></Image>
      <div className="flex flex-col justify-center  items-center border-t-2 mt-6 h-24 border-[#007026] w-full ">
        <h2 className="text-xl font-medium">Ecological Tshirt</h2>
        <p className="text-base font-thin uppercase text-gray-600">men’s t shirt</p>
        <div className="flex justify-between items-center">
        <h1 className="font-semibold  text-xl">$22.3</h1>
        </div>
        </div>
        <div className="flex flex-col justify-center  items-center border-t-2 mt-6 h-10 border-[#007026] w-full ">
        <button className="text-gray-600 underline">MOVE TO CART</button>
        </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}
