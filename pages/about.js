import Image from 'next/image'
import about1 from '../public/about1.png'
import about2 from '../public/about2.png'
import about3 from '../public/about3.png'
import Footer from './components/Footer'
import Head from 'next/head'
export default function about() {
  return (
        
        <>
           <Head>
        <title>EcoThreads | About Us</title>
        <meta name="description" content="A Sustainable Fashion Firm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
    <div className="max-w-7xl m-auto">
      <Image src={about1} alt='yoo' className='max-w-5xl m-auto h-[560px] mt-14'></Image>
      <p className='mt-14 text-lg'>Welcome to <b>EcoThreads</b>, a socially responsible and environmentally sustainable fashion brand that is dedicated to transforming the fashion industry. </p>
    <h1 className='text-5xl text-primary-color tracking-wider font-bold text-center my-10'>OUR MISSION</h1>
    <div className='flex justify-between '>
        <div>
        <p className='mt-20 leading-7'>We are on a mission to create a world where fashion is not just about looking good, but also doing good.
</p>
<p className="mt-5 pr-10 leading-7">At EcoThreads, we believe that fashion should not come at the cost of the environment or the people who make it. Thats why we prioritize equity, animal welfare, social justice, and environmental stewardship in every aspect of our business. 
We are committed to establishing a carbon-neutral fashion business and have developed innovative strategies to achieve this goal. 
At EcoThreads, we believe that everyone deserves access to sustainable fashion. Thats why we offer high-quality, affordable products that are ethically made and designed to last. We work with independent designers and artisans from around the world, ensuring fair wages and safe working conditions for everyone involved in the production process.
We are committed to having a positive impact on society as a whole, which is why we partner with organizations that share our values and support social causes. We also donate a portion of our profits to charitable organizations that promote sustainability, social justice, and animal welfare.
Thank you for joining us on our mission to transform the fashion industry. Together, we can create a world where fashion is sustainable, equitable, and just for all.</p>
        </div>
       
<Image src={about2} alt='yoo' className='h-[470px]'></Image>
    </div>
    <h1 className='text-5xl text-primary-color tracking-wider font-bold text-center my-10'>OUR PROCESS</h1>
    <div className='flex justify-between '>
        <div>
        
<ul className='list-decimal pr-10 mt-10'>
    <li><b>Material sourcing:</b> We carefully select sustainable and ethical materials which do not use any animal fibres or skins. We use materials such as organic cotton, recycled polyester, and Tencel, from our trusted suppliers.</li>
    <li><b>Design and prototyping:</b> Our team of designers creates unique and stylish designs that are both functional and sustainable. We develop prototypes to ensure that the design meets our quality standards.</li>
    <li><b>Cutting:</b> The fabric is cut into individual pieces using a computer-controlled cutting machine to ensure accuracy and minimize waste.</li>
    <li><b>Sewing:</b> Skilled artisans sew the individual pieces together to create the final garment, using eco-friendly and energy-efficient production techniques.</li>
    <li><b>Sewing:</b> Each garment is inspected for quality and durability to ensure that it meets our high standards.</li>
    <li><b>Packaging and shipping: </b> We use eco-friendly packaging materials and carbon-neutral shipping options to minimize our environmental impact.</li>
</ul>
        <p className='mt-5 leading-7 pr-10'>Throughout the manufacturing process, we strive to minimize waste and conserve resources. We use closed-loop manufacturing techniques and innovative technologies to reduce water and energy consumption, and we recycle fabric scraps and other waste materials whenever possible. Our sustainable manufacturing practices ensure that our clothing is not only fashionable and functional but also environmentally responsible.
</p>
        </div>
       
<Image src={about3} alt='yoo' className='h-[470px]'></Image>
    </div>
    </div>
    <Footer/>
    </>
  )
}
