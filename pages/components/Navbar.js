import Link from 'next/link';
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Logo from '../../public/logo.png'
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };
  const router = useRouter()
  const links = [
    {
      label: "HOME",
      path: "/"
    },
    {
      label: "STORE",
      path: "/store"
    },
    {
      label: "MEMBERSHIP",
      path: "/pricing"
    },
    {
      label: "ABOUT US",
      path: "/about"
    },
    {
      label: "SUPPORT",
      path: "https://coreisus.com/contact"
    }
  ]

  return (
    <div
      
      className=' left-0 top-0 w-full z-10 ease-in duration-300 border-b border-b-primary-color pb-5'
    >
      <div className='max-w-7xl m-auto flex justify-between items-center pt-8 '>
        <Link href='/'>
          <Image src={Logo} alt='CORE LOGO' className='w-12' ></Image>
        </Link>
        <ul className='hidden sm:flex font-medium'>
          {links.map(link => (
            <li className='p-4' key={""}>
            <Link href={link.path}>{link.label}</Link>
          </li> 
          ))}
        </ul>
        {/* absolute inset-y-0 left-0 w-4 h-4 my-auto ml-2 fill-current */}
        {/* <TbArrowsExchange size={28}/> */}
        <div className='flex justify-center items-center '>
        <div className="relative">
  <AiOutlineSearch className='absolute inset-y-0 left-0 w-4 h-4 my-auto ml-2 fill-current' size={28}/>
  <input className="block rounded-s- w-full border bg-gray-100 rounded py-2 px-4 pl-10 focus:outline-none focus:ring focus:border-none" type="text" placeholder="Search"/>
</div>
<div className='absolute top-0  right-0 bg-green-500 w-60  h-full hidden'>
  <div className='flex justify-evenly items-center mt-10'>
    <h1 className='text-white text-xl font-bold'>My Shopping Cart</h1>
    <AiOutlineCloseCircle size={24} color='white' className=''/>
  </div>
  <ul className='list-decimal    text-white font-medium'>
    <li className=''>
      <div className='flex justify-evenly items-center text-white font-medium '>
        <p>T SHIRT </p>
        <p>1</p>
      </div>
    </li>
  </ul>
</div>
            <Link href={"/wishlist"}>
        <AiOutlineHeart size={28} className='ml-10 mr-5'/>
            </Link>
            <Link href={"/cart"}>
        <BsFillCartFill size={28}/>
          <Image className="w-14 h-14 rounded-full " src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTravis_Scott&psig=AOvVaw1J0aLpI1rXHvo2iMImsi9y&ust=1683258350499000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLCf8pHg2v4CFQAAAAAdAAAAABAE"}/>

            </Link>
        </div>
        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20}/>
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
          {links.map(link => (
            <li className='p-4' key={""}>
            <Link href={link.path}>{link.label}</Link>
          </li> 
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
