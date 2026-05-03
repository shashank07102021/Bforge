import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <nav>
            <div className="logo">B Forge</div>
            <ul className="nav-links">
                <li><Link to="/">Collection</Link></li>
                <li><Link to="/">Style It</Link></li>
                <li><Link to="/">Mood Finder</Link></li>
                <li><Link to="/try-on">Try-On</Link></li>
                <li><Link to="/">Story</Link></li>
            </ul>
            <div className="nav-actions">
                <button className="login-btn">Login</button>
                <button className='cart-btn'>🛒 Cart</button>
            </div>
        </nav>
    )
}

export default Navbar