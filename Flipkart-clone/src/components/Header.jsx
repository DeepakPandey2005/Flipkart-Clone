import {BsFillPersonFill, } from "react-icons/bs"
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"
const Header=()=>{
const cart =useSelector((store)=>store.cart)
    return <>
    <header>
        <div className="logo_container">
            <Link to="#"><img className="myntra_home" src="images/flipkart_logo.png" alt="Myntra Home" /></Link>
        </div>
        <nav className="nav_bar">

            <Link to="/login">Login</Link>
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/feedback">feedback</Link>
            <a href="#">Studio <sup>New</sup></a>
            
            
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more" />
        </div>
        <div className="action_bar">
            <div className="action_container">
                <BsFillPersonFill />
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
                      <FaHeart/>             
                                <span className="action_name">Wishlist</span>
            </div>

            <Link className="action_container" to="/cart">
                <FaShoppingCart/>
                <span className="action_name">Cart</span>
                <span className="bag-item-count">{cart.length}</span>
            </Link>
        </div>
    </header>
    
    </>
}
export default Header