import React from "react"
import Home from "../component/MainPage/Home"
import FlashDeals from "../component/flahDeals/FlashDeals"
import TopCate from "../component/top/TopCate"
import NewArrivals from "../component/newarraivals/NewArraivals"
import Discount from "../component/discount/Discount"
import Shop from "../component/shops/Shop"
import Annocument from "../component/annocument/Annocument"
import Wrapper from "../component/wrapper/Wrapper"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages