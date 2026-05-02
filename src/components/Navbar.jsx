import './Navbar.css'

function Navbar(){
    return(
        <nav>
            <div className="logo">B Forge</div>
            <ul className="nav-links">
                <li>Collection</li>
                <li>Style It</li>
                <li>Mood Finder </li>
                <li>Try-On</li>
                <li>Story</li>
            </ul>
            <div className="nav-actions">
                <button className="login-btn">Login</button>
                <button className='cart-btn'>🛒 Cart</button>
            </div>
        </nav>
    )
}

export default Navbar