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

       


         <div className="flex justify-between mt-10">
          <Card className="mr-20"  title="Ecological TShirt" gender="Men's TShirt" price="Rs.800" avatar="/image 53.png"/>
          <Card className="mr-20" title="The Standards TShirt" gender="Men's TShirt" price="Rs.800" avatar="/image 60.png"/>
          <Card className="" title="Eco-Friendly Carry Bag" gender="Miscallaneous" price="Rs.800" avatar="/image 69.png"/>
          
         </div>
         <div className="flex justify-between  my-20 ">
          <Card className="mr-20" title="Eco-Friendly Carry Bag" gender="Miscallaneous" price="Rs.800" avatar="/image 65.png"/>
          <Card className="mr-20" title="Eco-Friendly Carry Bag" gender="Miscallaneous" price="Rs.800" avatar="/image 63.png"/>
          <Card className="" title="Eco-Friendly Carry Bag" gender="Miscallaneous" price="Rs.800" avatar="/image 64.png"/>
          
         </div>
         <div className="flex justify-between  mb-10">
          <Card className="mr-20" title="Eco-Friendly Carry Bag" gender="Miscallaneous" price="Rs.800" avatar="/image 75.png"/>
          <Card className="mr-20" title="Eco-Friendly Carry Bag" gender="Miscallaneous" price="Rs.800" avatar="/image 76.png"/ >
          <Card className="" title="Eco-Friendly Carry Bag" gender="Miscallaneous" price="Rs.800" avatar="/image 74.png"/>
          
         </div>
        </div>
    </div>
      </div>
      <Footer/>
      </>
       
  )
}
