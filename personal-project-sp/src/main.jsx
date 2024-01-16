import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Home from './Home.jsx'
import Shop from './Shop.jsx'
import Stickers from './Stickers.jsx'
import Packs from './Packs.jsx'
import About from './About.jsx'
import Cart from './Cart.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/home" element={<Home/>}/>,
      <Route path="/shop" element={<Shop/>}/>,
      <Route path="/stickers" element={<Stickers/>}/>,
      <Route path="/packs" element={<Packs/>}/>,
      <Route path="/about" element={<About/>}/>,
      <Route path="/cart" element={<Cart/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
