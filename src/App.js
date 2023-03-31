
import CartContext from "./components/Context/CartContext";
import { useState } from "react";
import StorePage from "./pages/Store";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import MoviePage from "./Entertainment/MoviesPage";
import ContactUs from "./pages/ContactUs";
import { Route ,Routes} from "react-router-dom";
import Header from "./components/Header";
import CartContainer from "./components/Cart/CartConatiner";
const productsArr = [
  { id: 'p1' ,
    title: "Colors",
    price: 100,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  { id: 'p2' ,
    title: "Black and white Colors",
    price: 50,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  { id: 'p3' ,
    title: "Yellow and Black Colors",
    price: 70,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  { id: 'p4',
    title: "Blue Color",
    price: 100,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];


function App() {
  const[cartVisibility , setCartVisibility] = useState(false)
  const[orderList , setOrderList] = useState([])
  const ctxObj = {
    productsList:productsArr,
    cartVisibility:cartVisibility,
    setCartVisibility:setCartVisibility,
    orderList:orderList ,
    setOrderList:setOrderList
  }
  return (
    <CartContext.Provider value = {ctxObj}>
      <Header></Header>
      <Routes>
      <Route path = '/'  element={<HomePage/>}/>
      <Route path = '/store'  element={<StorePage/>}/>
      <Route path = '/about'  element={<AboutPage/>}/>
      <Route path = '/movies'  element={<MoviePage/>}/>
      <Route path = '/contact'  element={<ContactUs/>}/>
      </Routes>
      {cartVisibility && <CartContainer></CartContainer>}
    </CartContext.Provider>
  );
}

export default App;
