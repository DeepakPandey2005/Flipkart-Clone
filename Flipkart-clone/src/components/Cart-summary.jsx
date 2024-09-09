import { useSelector } from "react-redux";

const CartSummary=()=>{
  const cartitemsids=useSelector((store)=>store.cart);
  
  const items=  useSelector((store)=>store.items)
const finalitem=items.filter(item=>{
  const itemIndex=cartitemsids.indexOf(item.id)
  return itemIndex >=0;
})

  const CONVENIENCE_FEES=99;
  let totalItem = cartitemsids.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalitem.forEach(cartitems => {
    totalMRP += cartitems.original_price;
    totalDiscount += cartitems.original_price - cartitems.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
return (
<div className="cart-summary">
<div className="cart-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Delivery Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order my-3 ">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>

);
}
export default CartSummary