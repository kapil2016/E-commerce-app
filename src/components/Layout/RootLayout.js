import Header from "../Header"
import { Outlet } from "react-router-dom"
import CartContainer from "../Cart/CartConatiner"
import CartContext from "../Context/CartContext"
import { useContext } from "react"

const Rootlayout = ()=>{
    const ctx = useContext(CartContext)
    return <>
    <Header/>
    <Outlet/>
    {ctx.cartVisibility && <CartContainer></CartContainer>}
    </>
}

export default Rootlayout;