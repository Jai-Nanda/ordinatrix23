import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
import Navbar from './components/Navbar'
import { Montserrat } from 'next/font/google'
import { useEffect , useState } from 'react'
const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

// const [cart, setCart] = useState()
// const [total, setTotal] = useState(0)
// useEffect(() => {
  
// }, []);


// const saveData = (yourCart) => {
//   localStorage.setItem("cart", yourCart)
// }
// const addCart = (productCode, amt, price, name, size, variant) => {
//   let newCart = cart;
//   if(productCode in cart){
//     newCart[productCode].amt = cart[productCode].amt + amt
//   }
//   else{
//     newCart[productCode] = {amt: 1, price, name , size, variant}
//   }
//   setCart(newCart)
//   saveData(newCart)
// }


// const deleteCart = () => {
//   setCart({})
//   saveData({})
// }

// const removeCart = (productCode, amt, price, name, size, variant) => {
//   let newCart = cart
//   if(productCode in cart){
//     newCart[productCode].amt = cart[productCode].amt - amt
//   }
//   if(newCart[productCode]["amt"]<=0) {
//     delete newCart[productCode]
//   } 
  
//   setCart(newCart)
//   saveData(newCart)
// }

export default function App({ Component, pageProps }) {
  return <>  <style jsx global>{`
  html {
    font-family: ${montserrat.style.fontFamily};
  }
`}</style>

<Navbar/> <Component {...pageProps} /> 
</>
}