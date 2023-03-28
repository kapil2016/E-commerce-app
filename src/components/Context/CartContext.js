import React from "react"
const CartContext = React.createContext(
  {
    cartVisibility : false ,
    setCartVisibility: ()=>{},
    orderList: [],
    setOrderList:()=>{}
  }
)

export default CartContext ;