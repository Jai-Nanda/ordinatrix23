import { TbShoppingCartOff } from 'react-icons/tb'
import Link from 'next/link'
export default function Cart() {
  return (
    <>
    <div className='flex justify-start items-center flex-col h-[100vh] w-full'>
    <h1 className="font-medium text-5xl uppercase mt-28 mb-20">your cart</h1>
    <TbShoppingCartOff size={96} className=' '/>
    <p className='text-lg font-medium mt-20'>Your cart is currently empty!</p>
    <h1 className="font-medium text-lg mt-2 ">To add clothes, go shop at our  <Link className="text-[#007026] " href={"/store"}>STORE!</Link></h1>
</div>
    </>
  )
}
