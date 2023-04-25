import Image from "next/image"
import hey from '../../public/bro.png'
import { BsFillCartFill } from 'react-icons/bs'
export default function Card(props) {
  return (
    <div className="flex max-w-[300px] mx-5   flex-col justify-center items-center shadow-custom mb-10 rounded-lg">
        <div className="w-52 flex flex-col justify-center items-center">
      <Image src={props.shirt} width={140} height={160} className="max-h-[160px] object-cover" ></Image>
        </div>
      <div className="flex flex-col justify-center  px-4 shadow-custom w-[300px] h-28  rounded-lg  ">
        <h2 className="text-xl font-medium  pl-7 pb-1">{props.title}</h2>
        <p className="text-sm pl-7 pb-1">{props.gender}</p>
        <div className="flex justify-between items-center">
        <h1 className="font-semibold pl-7 text-lg">{props.price}</h1>
        <BsFillCartFill/>
        </div>
      </div>
    </div>
  )
}
