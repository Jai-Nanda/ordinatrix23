import Link from "next/link"
export default function Footer() {
  return (
    <>
      <footer className="flex  justify-between   items-center bg-primary-color w-full h-[350px]">
  <div className="max-w-7xl m-auto pt-10 flex justify-between  px-4 text-[#CFFFCB]">
    <div className="flex justify-between ">
        <div className="mx-32">
        <h5 className="text-xl font-bold mb-6">Features</h5>
        <ul className="list-none footer-links ">
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent">Find A Store</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent ">Member</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent ">Sign Up for Email</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent ">customer care</Link>
          </li>
        </ul>
      </div>
      <div className="mx-32">
        <h5 className="text-xl font-bold mb-6">Resources</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent" >Resource</Link>
          </li>
          <li className="">
            <Link href="#" className="border-b border-solid border-transparent ">Resource name</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent ">Another resource</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent ">Final resource</Link>
          </li>
        </ul>
      </div>
      <div className="mx-32">
        <h5 className="text-xl font-bold mb-6">About</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent ">Team</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent ">Locations</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent ">Privacy</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent ">Terms</Link>
          </li>
        </ul>
      </div>
      <div className="mx-32">
        <h5 className="text-xl font-bold mb-6">Help</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent">Support</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent">Help Center</Link>
          </li>
          <li className="">
            <Link href="#" className="border-b border-solid border-transparent ">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}
