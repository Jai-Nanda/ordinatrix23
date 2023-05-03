
export default function SidebarStore() {
  return (
    <>
<div className="max-w-7xl m-auto w-52 min-h-[100vh] flex justify-center ">


    <aside id="sidebar" className=" border-r-4 border-primary-color flex flex-col items-center w-full ">
        <div className="flex flex-col">

        <ul className="border-b-2 border-primary-color pb-6 mr-7 mt-10">
          <li>Hoodies & Sweatshirts</li>
          <li>Trousers & Tights</li>
          <li>Jackets</li>
          <li>Tops & T-Shirts</li>
          <li>Shorts</li>
          <li>Tracksuits</li>
        </ul>
        <ul className="border-b-2 border-primary-color pt-6 pb-6 mr-7">
          <li>Shop By Price</li>
          <li>Under $20</li>
          <li>$20 - $50</li>
          <li>$50 - $100</li>
          <li>Over $100</li>
        </ul>
          <p className="mt-6">Choose Color</p>
        <div className="flex justify-start items-center">
          <div className="w-8 h-8 mt-2 mr-2  rounded-full bg-black"></div>
          <div className="w-8 h-8 mt-2 mr-2  rounded-full bg-white border border-black"></div>
          <div className="w-8 h-8 mt-2  rounded-full bg-blue-500 border mr-2 border-black"></div>
          <div className="w-8 h-8 mt-2  rounded-full bg-green-500 border border-black"></div>
        </div>
        </div>

    </aside>

  
</div>
    </>
  )
}
