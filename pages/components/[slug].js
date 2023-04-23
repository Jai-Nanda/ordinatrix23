import { useRouter } from 'next/router'
import { useState } from 'react'
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

<section class=" body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 class=" text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
       
        <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
          <div class="flex">
            <span class="mr-3">Color</span>
            <button class="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-800 ml-1 bg-primary-color rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div class="flex ml-6 items-center">
            <span class="mr-3">Size</span>
            <div class="relative">
              <select class="rounded border border-gray-700 focus:ring-2 focus:ring-primary-color bg-transparent appearance-none py-2 focus:outline-none focus:border-primary-color  pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <span class="title-font font-medium text-2xl mr-20 ">$58.00</span>
          <input placeholder='Enter your pincode' onChange={ok} type="text" name="" id="" className='border-2 border-primary-color rounded-xl px-4'/>
          <button onClick={checkService} class="flex justify-center items-center text-white bg-primary-color border-2 border-primary-color w-32 h-10  text-sm rounded-xl">Check Pincode</button>
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