import { useSelector } from "react-redux";
import CartItem from "../src/components/Cart-item";
import CartSummary from "../src/components/Cart-summary"

const Cart = () => {
  const cartitems = useSelector((store) => store.cart)
  const items = useSelector((store) => store.items)
  const finalitem = items.filter(item => {
    const itemIndex = cartitems.indexOf(item.id)
    return itemIndex >= 0;
  })
  return (

    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalitem.map(item => <CartItem item={item} key={item.id} />)}

        </div>

        <CartSummary />

      </div>
    </main>
  );
}
export default Cart