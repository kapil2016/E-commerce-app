
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
import ProductDetails from "./pages/ProductDetails";
import SignUpModal from "./components/AuthForm/SignUpModal";
import ProfilePage from "./pages/ProfilePage";
const productsArr = [
  {
    id: 'p1',
    title: 'Samsung Galaxy S21',
    description: 'The Samsung Galaxy S21 is a high-end Android smartphone with top-of-the-line specs and features.',
    price: 999.99,
    brand: 'Samsung',
    color: 'Phantom Gray',
    size: '128GB',
    imageSrc: 'https://images.xtracover.com/Samsung_Samsung-Galaxy-S21-Plus-Phantom-Silver-128-GB-8-GB-RAM-_YZSR_1654601306.webp?q=5548&original=Samsung_Samsung-Galaxy-S21-Plus-Phantom-Silver-128-GB-8-GB-RAM-_YZSR_1654601306.JPEG',
    reviews: [
      {
        id: 1,
        title: 'Great phone!',
        comment: 'I love my new Samsung Galaxy S21! It has all the features I need and works really well.',
        rating: 5,
        author: 'Jane Doe',
        date: '2022-03-01'
      },
      {
        id: 2,
        title: 'Disappointing',
        comment: 'I was expecting more from this phone. It has some issues and doesn\'t work as well as I had hoped.',
        rating: 2,
        author: 'John Smith',
        date: '2022-02-15'
      }
    ]
  },
  {
    id: 'p2',
    title: 'Apple iPhone 13',
    description: 'The Apple iPhone 13 is the latest high-end smartphone from Apple, featuring a powerful processor and a beautiful OLED display.',
    price: 1099.99,
    brand: 'Apple',
    color: 'Graphite',
    size: '256GB',
    imageSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-model-unselect-gallery-2-202207_GEO_EMEA?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1654893618122',
    reviews: [
      {
        id: 1,
        title: 'Amazing phone!',
        comment: 'The Apple iPhone 13 is a fantastic phone! It works great and has an amazing camera.',
        rating: 5,
        author: 'Samantha Jones',
        date: '2022-01-28'
      },
      {
        id: 2,
        title: 'Not worth the price',
        comment: 'I don\'t think the Apple iPhone 13 is worth the high price tag. There are other phones with similar specs for less money.',
        rating: 3,
        author: 'Peter Parker',
        date: '2022-01-10'
      }
    ]
  }
];



function App() {
  const[cartVisibility , setCartVisibility] = useState(false)
  const[orderList , setOrderList] = useState([])
  const[signInModalVisibility,setSignInModalVisibility] = useState(false);
  const[idToken, setIdToken]=useState('');
  const[isLogedIn, setIsLogedIn] = useState(false)
  const ctxObj = {
    productsList:productsArr,
    cartVisibility:cartVisibility,
    setCartVisibility:setCartVisibility,
    orderList:orderList ,
    setOrderList:setOrderList,
    isLogedIn:isLogedIn,
    setIsLogedIn:setIsLogedIn,
    idToken:idToken,
    setIdToken:setIdToken,
    signInModalVisibility:signInModalVisibility,
    setSignInModalVisibility:setSignInModalVisibility
  }
  return (
    <CartContext.Provider value = {ctxObj}>
      <SignUpModal></SignUpModal>
      <Header></Header>
      <Routes>
      <Route path = '/'  element={<HomePage/>}/>
      <Route path = '/store'  element={<StorePage/>}/>
      <Route path = '/about'  element={<AboutPage/>}/>
      <Route path = '/movies'  element={<MoviePage/>}/>
      <Route path = '/contact'  element={<ContactUs/>}/>
      <Route path = '/user/:userID'  element={<ProfilePage/>}/>
      <Route path = '/products/:productID'  element={<ProductDetails/>}/>
      </Routes>
      {cartVisibility && <CartContainer></CartContainer>}
    </CartContext.Provider>
  );
}

export default App;
