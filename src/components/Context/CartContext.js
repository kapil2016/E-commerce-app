import React from "react"
const CartContext = React.createContext(
  { productsList:[],
    cartVisibility : false ,
    setCartVisibility: ()=>{},
    orderList: [],
    setOrderList:()=>{},
    idToken:'',
    setIdToken:()=>{},
    isLogedIn:false,
    setIsLogedIn:()=>{},
    signInModalVisibility:false ,
    setSignInModalVisibility:()=>{},
    userEmail : '' ,
    setUserEmail : ()=>{}
  }
)

export default CartContext ;