import Link from "next/link"
import Card from "./components/Card"
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

<h1 className='text-5xl text-primary-color tracking-wider font-bold max-w-7xl m-auto uppercase my-10'>Featured</h1>
<div className="max-w-7xl m-auto mt-20 flex justify-between items-center"> 
    
    <div className='w-96 rounded-2xl h-96' style={{
      backgroundImage: `url(/store1.png)`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className='flex flex-col justify-center mt-5 items-center text-[#CFFFCB]   pt-60 '>
      <h1 className='font-bold text-3xl text-white uppercase'>women’s formals</h1>
     <Link className="underline font-medium mt-5 text-sm text-[#CFFFCB]" href={"/seeStore"}>SEE MORE</Link>
      </div>
 
      </div>
      <div className='w-96 rounded-2xl h-96' style={{
      backgroundImage: `url(/store2.png)`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className='flex flex-col justify-center mt-5 items-center text-[#CFFFCB]   pt-60 '>
      <h1 className='font-bold text-3xl text-white uppercase'>men’s formals</h1>
     <Link className="underline font-medium mt-5 text-sm text-[#CFFFCB]" href={"/seeStore"}>SEE MORE</Link>
      </div>
 
      </div>
      <div className='w-96 rounded-2xl h-96' style={{
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
      <h1 className='text-5xl text-primary-color tracking-wider font-bold max-w-7xl m-auto uppercase my-10'>new arrivals</h1>
      <div className="max-w-7xl m-auto flex justify-between items-center">
        <Card className="min-h-[700px]" title="Ecological TShirt" gender="Men's TShirt" pice="$29" shirt="/image 21.png"/>
        <Card title="The Standards TShirt" gender="Men's TShirt" pice="$20" shirt="/Rectangle 3.png"/>
        <Card title="Eco-Friendly Carry Bag" gender="Miscallaneous" pice="$10" shirt="/image 32.png" />
        <Card title="Eco-Friendly Carry Bag" gender="Miscallaneous" pice="$10" shirt="/Rectangle 2-2.png" />
      </div>
      <Footer/>
    </>
  )
}
