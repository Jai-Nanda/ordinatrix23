import Link from "next/link"
import Card from "./components/Card"
import SidebarStore from "./components/SidebarStore"
import Footer from "./components/Footer"
import Head from "next/head"
export default function store() {
  return (
    <>
       <Head>
        <title>EcoThreads | Store</title>
        <meta name="description" content="A Sustainable Fashion Firm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
    <div className='max-w-7xl m-auto'>
      <div className="flex justify-evenly ">
        <div>
          <SidebarStore/>
        </div>
        <div>

       

         <h1 className='text-5xl text-primary-color tracking-wider font-bold text-center my-10 '>NEW ARRIVALS</h1>
         <div className="flex justify-between items-center ">
          <Card />
          <Card/>
          <Card/>
          
         </div>
         <div className="flex justify-between items-center ">
          <Card />
          <Card/>
          <Card/>
          
         </div>
         <div className="flex justify-between items-center ">
          <Card />
          <Card/>
          <Card/>
          
         </div>
        </div>
    </div>
      </div>
      <Footer/>
      </>
       
  )
}
