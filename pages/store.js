import Link from "next/link"
export default function store() {
  return (
    <div className='max-w-7xl m-auto'>
         <h1 className='text-5xl text-primary-color tracking-wider font-bold text-center my-10 '>FEATURED</h1>
         <div className="flex justify-between items-center ">
           
            <div className="flex justify-evenly  pt-80 flex-col items-center rounded-lg" style={{
        backgroundImage: "url('/store1.png')",
        height: '450px',
        width: '400px',
        backgroundRepeat: 'no-repeat'
      }}>
        <p className="text-white text-3xl font-bold ">

        WOMEN'S FORMALS 
        </p>
        <Link href={"/"} className="text-primary-color underline">SEE MORE</Link>
      </div>
      <div className="flex justify-evenly  pt-80     flex-col items-center rounded-lg" style={{
        backgroundImage: "url('/store1.png')",
        height: '450px',
        width: '400px',
        backgroundRepeat: 'no-repeat'
      }}>
        <p className="text-white text-3xl font-bold ">

        WOMEN'S FORMALS 
        </p>
        <Link href={"/"} className="text-primary-color underline">SEE MORE</Link>
      </div>
      <div className="flex justify-evenly  pt-80 flex-col items-center rounded-lg" style={{
        backgroundImage: "url('/store1.png')",
        height: '450px',
        width: '400px',
        backgroundRepeat: 'no-repeat'
      }}>
        <p className="text-white text-3xl font-bold ">

        WOMEN'S FORMALS 
        </p>
        <Link href={"/"} className="text-primary-color underline">SEE MORE</Link>
      </div>        
         </div>
    </div>
  )
}
