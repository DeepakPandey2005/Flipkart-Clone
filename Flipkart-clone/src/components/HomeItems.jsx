import { useDispatch, useSelector } from "react-redux"
import { cartAction } from "../store/cartslice"
import {GrAdd} from 'react-icons/gr'
import {AiFillDelete} from 'react-icons/ai'
const HomeItems=({item})=>{
    const cartitem=useSelector((store)=> store.cart)
    const elemetfound=cartitem.indexOf(item.id) >=0;
const dispatch =useDispatch()
    const handleAdd=()=>{
        dispatch(cartAction.add(item.id))
    }
    const handleRemove=()=>{
        dispatch(cartAction.remove(item.id))
    }
return <>

<div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ |  {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elemetfound ?
      <button className="btn-add-bag btn btn-danger" onClick={handleRemove}><AiFillDelete className="m-2"/>Remove</button>
      :<button className="btn-add-bag btn btn-primary" onClick={handleAdd}><GrAdd className="m-2"/> Add to cart</button>
      
    }
    </div>
</>
}
export default HomeItems