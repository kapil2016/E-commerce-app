import React from "react"
const CartContext = React.createContext(
  { productsList:[],
    cartVisibility : false ,
    setCartVisibility: ()=>{},
    orderList: [],
    setOrderList:()=>{},
    isSignIn:false,
    signInModalVisibility:false ,
    setSignInModalVisibility:()=>{}
  }
)

export default CartContext ;