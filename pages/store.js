import Link from "next/link"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Head from "next/head"
import {AiOutlineRight} from 'react-icons/ai'
import { motion } from "framer-motion";
export default function store() {
  return (
    <>
       <Head>
        <title>EcoThreads | Store</title>
        <meta name="description" content="A Sustainable Fashion Firm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
<h1 className='text-5xl text-primary-color tracking-wider font-bold max-w-7xl m-auto uppercase my-10'>Featured</h1>
<div className="max-w-7xl m-auto mt-20 flex justify-between items-center"> 
    
    <div className='w-96 rounded-2xl h-96 utha' style={{
      backgroundImage: `url(/store1.png)`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className='flex flex-col justify-center mt-5 items-center text-[#CFFFCB]   pt-60 '>
      <h1 className='font-bold text-3xl text-white uppercase'>women’s formals</h1>
     <Link className="underline font-medium mt-5 text-sm text-[#CFFFCB]" href={"/seeStore"}>SEE MORE</Link>
      </div>
 
      </div>

      <div className='w-96 rounded-2xl h-96 utha' style={{
      backgroundImage: `url(/store2.png)`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className='flex flex-col justify-center mt-5 items-center text-[#CFFFCB]   pt-60 '>
      <h1 className='font-bold text-3xl text-white uppercase'>men’s formals</h1>
     <Link className="underline font-medium mt-5 text-sm text-[#CFFFCB]" href={"/seeStore"}>SEE MORE</Link>
      </div>
 
      </div>
      <div className='w-96 rounded-2xl h-96 utha' style={{
      backgroundImage: `url(/store3.png)`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className='flex flex-col justify-center mt-5 items-center text-[#CFFFCB]   pt-60 '>
      <h1 className='font-bold text-3xl text-white uppercase'>WOMEN’S T-SHIRTS</h1>
     <Link className="underline font-medium mt-5 text-sm text-[#CFFFCB]" href={"/seeStore"}>SEE MORE</Link>
      </div>
 
      </div>
      
      </div>
      <div className="flex justify-between items-center max-w-7xl m-auto">
      <h1 className='text-5xl text-primary-color tracking-wider font-bold uppercase my-10'>new arrivals</h1>
      <div className="flex justify-center items-center">
      <Link className="underline font-medium  text-xl text-primary-color" href={"/seeStore"}>SEE MORE</Link>
      <Link href={"/seeStore"}>
      <div className="ml-5 w-7 h-7 bg-gray-300 rounded-full flex justify-center items-center">
      <AiOutlineRight className="" size={16}/>
      </div>
      </Link>
     
      </div>
      </div>
      <div className="max-w-7xl m-auto flex justify-between items-center mb-20">
        <Card  title="Ecological TShirt" gender="Men's TShirt" price="Rs.800" avatar="/image 58.png"/>
        <Card  title="Ecological TShirt" gender="Men's TShirt" price="Rs.800" avatar="/image 69.png"/>
        <Card  title="Ecological TShirt" gender="Men's TShirt" price="Rs.800" avatar="/image 66.png"/>
        <Card  title="Ecological TShirt" gender="Men's TShirt" price="Rs.800" avatar="/image 70.png"/>
      </div>
      <div className="flex justify-between items-center max-w-7xl m-auto">
      <h1 className='text-5xl text-primary-color tracking-wider font-bold uppercase my-10'>Men’s Tshirts</h1>
      <div className="flex justify-center items-center">
      <Link className="underline font-medium  text-xl text-primary-color" href={"/seeStore"}>SEE MORE</Link>
      <Link href={"/seeStore"}>
      <div className="ml-5 w-7 h-7 bg-gray-300 rounded-full flex justify-center items-center">
      <AiOutlineRight className="" size={16}/>
      </div>
      </Link>
     
      </div>
      </div>

      <div className="max-w-7xl m-auto flex justify-between items-center mb-20">
        <Card  title="Ecological TShirt" gender="Men's TShirt" price="Rs.800" avatar="/image 71.png"/>
        <Card  title="Ecological TShirt" gender="Men's TShirt" price="Rs.800" avatar="/image 69.png"/>
        <Card  title="Ecological TShirt" gender="Men's TShirt" price="Rs.800" avatar="/image 76.png"/>
        <Card  title="Ecological TShirt" gender="Men's TShirt" price="Rs.800" avatar="/image 72.png"/>
      </div>
      <div className="flex justify-between items-center max-w-7xl m-auto">
      <h1 className='text-5xl text-primary-color tracking-wider font-bold uppercase my-10'>Women’s Tshirts</h1>
      <div className="flex justify-center items-center">
      <Link className="underline font-medium  text-xl text-primary-color" href={"/seeStore"}>SEE MORE</Link>
      <Link href={"/seeStore"}>
      <div className="ml-5 w-7 h-7 bg-gray-300 rounded-full flex justify-center items-center">
      <AiOutlineRight className="" size={16}/>
      </div>
      </Link>
     
      </div>
      </div>

      <div className="max-w-7xl m-auto flex justify-between items-center mb-20">
        <Card  title="Ecological TShirt" gender="Men's TShirt" price="Rs.800" avatar="/image 65.png"/>
        <Card  title="Ecological TShirt" gender="Men's TShirt" price="Rs.800" avatar="/image 64.png"/>
        <Card  title="Ecological TShirt" gender="Men's TShirt" price="Rs.800" avatar="/image 66.png"/>
        <Card  title="Ecological TShirt" gender="Men's TShirt" price="Rs.800" avatar="/image 73.png"/>
      </div>
      <Footer/>
    </>
  )
}
