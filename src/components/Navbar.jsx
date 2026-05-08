import{useState,useEffect} from 'react'
import{Link} from 'react-router-dom'
import './Navbar.css'
function Navbar(){
    const[scrolled,setScrolled]=useState(false)

    useEffect(()=>{
        const onScroll=()=>setScrolled(window.scrollY>30)
        window.addEventListener('scroll',onScroll)
        return()=>window.removeEventListener('scroll',onScroll)
    },[])
    const links=[
        {name:'Collection',path:'/collection'},
        {name:'Style it ',path:'/style-it'},
        {name:'Mood Finder',path:'/mood-finder'},
        {name:'Try-on',path:'/try-on'},
        {name:'Story',path:'/story'},
    ]

    return(
        <nav className={`nav ${scrolled ? 'nav--scrolled':''}`}>
            <Link to="/" className="nav__logo" >
            <span className="nav__mark">B</span>
            <span>B Forge</span>
            </Link>
            <ul className="nav__links">
                {links.map((l)=>(
                    <li key={l.name}>
                        <Link className="nav__link" to={l.path}>
                        {l.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="nav__actions">
                <Link to="/login" className=" btn btn--ghost  nav__cta">
                Login
                </Link>
                <Link to="/cart" className="btn nav__cta">
                🛒 Cart
                </Link>                
            </div>
        </nav>
    )
} 
export default Navbar