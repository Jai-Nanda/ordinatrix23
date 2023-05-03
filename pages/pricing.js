import Image from "next/image"
import vector from '../public/vector.png'
import Footer from "./components/Footer"
import Head from "next/head"
import Link from "next/link"
export default function pricing() {
    return (
        <>
          <Head>
        <title>EcoThreads | Membership</title>
        <meta name="description" content="A Sustainable Fashion Firm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
            <section className="">
                <div className="container max-w-7xl m-auto py-12 px-6">
                    <h1 className="text-5xl text-primary-color tracking-wider font-bold text-center my-10">
                        PRICING
                    </h1>
                    <p className="text-center text-lg text-gray-700 mt-2 px-6">
                        Flexible packages to suit your use-case.
                    </p>
                    <div className="h-1 mx-auto bg-primary-color w-24 opacity-75 mt-4 rounded"></div>

                    <div className="mt-10">
                        <div className="  flex justify-between  ">
                            <div className="border-2 border-primary-color rounded-2xl h-80 w-80">
                                <div className="flex  flex-col justify-between ">
                                    <div className="flex justify-start flex-col items-start pl-12">
                                        <h1 className="text-sm  font-semibold uppercase p-3 pb-0 text-center tracking-wide text-primary-color">
                                            LITE
                                        </h1>
                                        <p className="text-4xl  font-semibold uppercase p-3 pb-0 text-center tracking-wide text-primary-color">$0</p>
                                    </div>

                                    <div className="flex flex-wrap mt-3 px-6">
                                        <ul>
                                            <li className="flex items-center">
                                                <div className=" rounded-full p-2 fill-current text-green-700">
                                                    <svg className="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path
                                                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                        ></path>
                                                        <polyline
                                                            points="22 4 12 14.01 9 11.01"
                                                        ></polyline>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 text-lg ml-3">Paid deliveries for orders under
                                                    $30</span
                                                >
                                            </li>
                                            <li className="flex items-center">
                                                <div
                                                    className=" rounded-full p-2 fill-current text-green-700"
                                                >
                                                    <svg
                                                        className="w-6 h-6 align-middle"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path
                                                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                        ></path>
                                                        <polyline
                                                            points="22 4 12 14.01 9 11.01"
                                                        ></polyline>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 text-lg ml-3"
                                                >Only seasonal discounts</span
                                                >
                                            </li>
                                            <li className="flex items-center">
                                                <div className=" rounded-full p-2 fill-current text-green-700">

                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className=" flex justify-center items-center p-8  uppercase">
                                        <Link href="/" className="mt-3 text-sm font-medium  w-52 rounded-3xl px-6 py-3 block border-2 border-primary-color text-center">GET STARTED   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 border-primary-color rounded-2xl h-[450px] w-80">
                                <div className="flex  flex-col justify-between ">
                                    <div className="flex justify-start flex-col items-start pl-12">
                                        <h1 className="text-sm  font-semibold uppercase p-3 pb-0 text-center tracking-wide text-primary-color">
                                            PLUS
                                        </h1>
                                        <p className="text-4xl  font-semibold uppercase p-3 pb-0 text-center tracking-wide text-primary-color">$9.99</p>
                                    </div>

                                    <div className="flex flex-wrap mt-3 px-6">
                                        <ul>
                                            <li className="flex items-center">
                                                <div className=" rounded-full p-2 fill-current text-green-700">
                                                    <svg className="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path
                                                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                        ></path>
                                                        <polyline
                                                            points="22 4 12 14.01 9 11.01"
                                                        ></polyline>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 text-lg ml-3">Big discounts everyday</span
                                                >
                                            </li>
                                            <li className="flex items-center">
                                                <div
                                                    className=" rounded-full p-2 fill-current text-green-700"
                                                >
                                                    <svg
                                                        className="w-6 h-6 align-middle"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path
                                                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                        ></path>
                                                        <polyline
                                                            points="22 4 12 14.01 9 11.01"
                                                        ></polyline>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 text-lg ml-3"
                                                >Free Delivery</span
                                                >
                                            </li>
                                            <li className="flex items-center">
                                                <div
                                                    className=" rounded-full p-2 fill-current text-green-700"
                                                >
                                                    <svg
                                                        className="w-6 h-6 align-middle"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path
                                                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                        ></path>
                                                        <polyline
                                                            points="22 4 12 14.01 9 11.01"
                                                        ></polyline>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 text-lg ml-3"
                                                >Early access to some drops</span
                                                >
                                            </li>
                                            <li className="flex items-center">
                                                <div
                                                    className=" rounded-full p-2 fill-current text-green-700"
                                                >
                                                    <svg
                                                        className="w-6 h-6 align-middle"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path
                                                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                        ></path>
                                                        <polyline
                                                            points="22 4 12 14.01 9 11.01"
                                                        ></polyline>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 text-lg ml-3"
                                                >Priority customer service</span
                                                >
                                            </li>
                                            <li className="flex items-center">
                                                <div
                                                    className=" rounded-full p-2 fill-current text-green-700"
                                                >
                                                    <svg
                                                        className="w-6 h-6 align-middle"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path
                                                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                        ></path>
                                                        <polyline
                                                            points="22 4 12 14.01 9 11.01"
                                                        ></polyline>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 text-lg ml-3"
                                                >Access to special member-only 
                                                drops</span
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div className=" flex justify-center items-center p-8  uppercase">
                                        <Link href="/" className="mt-3 text-sm font-medium  w-52 rounded-3xl px-6 py-3 block border-2 border-primary-color text-center">GET STARTED   </Link>
                                    </div>
                                </div>
                            </div><div className="border-2 border-primary-color rounded-2xl h-[575px] w-80 bg-[#CFFFCB] shadow-custom2">
                                <div className="flex  flex-col justify-between p-0 m-0 ">
                                    <div className="bg-[#007026] h-11  rounded-t-2xl ">
                                        <p className="text-center text-white pt-2 ">ANNUAL PLAN</p>
                                    </div>
                                    <div className="flex justify-start flex-col items-start pl-12">
                                        <h1 className="text-sm  font-semibold uppercase p-3 pb-0 text-center tracking-wide text-primary-color">
                                        PREMIER
                                        </h1>
                                        <p className="text-4xl  font-semibold uppercase p-3 pb-0 text-center tracking-wide text-primary-color ">$19.99</p>
                                    </div>

                                    <div className="flex flex-wrap mt-3 px-6">
                                        <ul>
                                            <li className="flex items-center">
                                                <div className=" rounded-full p-2 fill-current text-green-700 ">
                                                    <svg className="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path
                                                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                        ></path>
                                                        <polyline
                                                            points="22 4 12 14.01 9 11.01"
                                                        ></polyline>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 text-lg ml-3">Big discounts everyday</span
                                                >
                                            </li>
                                            <li className="flex items-center">
                                                <div
                                                    className=" rounded-full p-2 fill-current text-green-700"
                                                >
                                                    <svg
                                                        className="w-6 h-6 align-middle"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path
                                                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                        ></path>
                                                        <polyline
                                                            points="22 4 12 14.01 9 11.01"
                                                        ></polyline>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 text-lg ml-3"
                                                >Free Delivery</span
                                                >
                                            </li>
                                            <li className="flex items-center">
                                                <div
                                                    className=" rounded-full p-2 fill-current text-green-700"
                                                >
                                                    <svg
                                                        className="w-6 h-6 align-middle"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path
                                                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                        ></path>
                                                        <polyline
                                                            points="22 4 12 14.01 9 11.01"
                                                        ></polyline>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 text-lg ml-3"
                                                >Early access to all drops</span
                                                >
                                            </li>
                                            <li className="flex items-center">
                                                <div
                                                    className=" rounded-full p-2 fill-current text-green-700"
                                                >
                                                    <svg
                                                        className="w-6 h-6 align-middle"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path
                                                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                        ></path>
                                                        <polyline
                                                            points="22 4 12 14.01 9 11.01"
                                                        ></polyline>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 text-lg ml-3"
                                                >Priority customer service</span
                                                >
                                            </li>
                                            <li className="flex items-center">
                                                <div
                                                    className=" rounded-full p-2 fill-current text-green-700"
                                                >
                                                    <svg
                                                        className="w-6 h-6 align-middle"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path
                                                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                        ></path>
                                                        <polyline
                                                            points="22 4 12 14.01 9 11.01"
                                                        ></polyline>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 text-lg ml-3"
                                                >Priority shipping</span
                                                >
                                            </li>
                                            <li className="flex items-center">
                                                <div
                                                    className=" rounded-full p-2 fill-current text-green-700"
                                                >
                                                    <svg
                                                        className="w-6 h-6 align-middle"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path
                                                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                        ></path>
                                                        <polyline
                                                            points="22 4 12 14.01 9 11.01"
                                                        ></polyline>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 text-lg ml-3"
                                                >Access to special member-only 
                                                drops</span
                                                >
                                            </li>
                                            <li className="flex items-center">
                                                <div
                                                    className=" rounded-full p-2 fill-current text-green-700"
                                                >
                                                    <svg
                                                        className="w-6 h-6 align-middle"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path
                                                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                        ></path>
                                                        <polyline
                                                            points="22 4 12 14.01 9 11.01"
                                                        ></polyline>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 text-lg ml-3"
                                                >Member-only newsletter</span
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div className=" flex justify-center items-center p-8  uppercase">
                                        <Link href="/" className="mt-3 text-sm font-medium  w-52 rounded-3xl px-6 py-3 block border-2 border-primary-color text-center">GET STARTED   </Link>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            </section>

            <div className="flex justify-evenly      mt-28">
                <div className="flex flex-col justify-items-start  max-w-xl">
                    <h1 className="font-bold text-primary-color text-2xl">BIG DISCOUNTS</h1>
                    <Image src={vector} alt="hey"></Image>
                    <p className="max-w-sm">Save big on ALL products everyday. Why wait for a sale?</p>
                </div>
                <div className="flex flex-col justify-center  max-w-xl">
                    <h1 className="font-bold text-primary-color text-2xl">EARLY ACCESS</h1>
                    <Image src={vector} alt="hey"></Image>
                    <p className="max-w-sm">Get your hands on select products and designs before others do</p>
                </div>
            </div>
            <div className="flex justify-evenly ic  mt-10">
                <div className="-ml-14">
                    <h1 className="font-bold text-primary-color text-2xl">FREE DELIVERY</h1>
                    <Image src={vector} alt="hey"></Image>
                    <p className="max-w-sm">We ship your orders before everyone else’s</p>
                </div>
                <div className="flex flex-col justify-start      mb-20">
                    <h1 className="font-bold text-primary-color text-2xl max-w-xl">PRIORITISED SHIPPING</h1>
                    <Image src={vector} alt="hey"></Image>
                    <p className="max-w-sm">We ship your orders before everyone else’s</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}
