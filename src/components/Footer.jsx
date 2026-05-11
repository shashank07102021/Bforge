import './Footer.css'

function Footer(){
    return(
        <footer className="footer">
            <div className="footer__hero">
                She<em> drapes.</em><br/>
                She<span className="stroke"> slays.</span>
            </div>
            <div className="footer__grid">
                <div className="footer__brand">
                    <div className="footer__logo">
                        <span className="nav__mark">B</span>
                        <span>B Forge</span>
                    </div>
                    <p>Handcrafted kurtis for modern Indian woman.</p>
                    <span className="footer__addr">
                        Bhopal,Madhya Pradesh<br/>
                    </span>
                </div>
                <div className="footer__col">
                    <h4>Shop</h4>
                    <ul>
                        <li><a href="/collection">New Arrivals</a></li>
                        <li><a href="/collection">The Festive Edit</a></li>
                        <li><a href="/collection">Daily Drapes</a></li>
                        <li><a href="/try-on">Try-On at Home </a></li>
                        <li><a href="#">Gift a Kurti</a></li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h4>Atelier</h4>
                    <ul>
                        <li><a href='#'>Our Story</a></li>
                        <li><a href='#'>The Making</a></li>
                        <li><a href='#'>Mood Finder</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h4> Stay in the Loop</h4>
                    <div className="footer__news">
                        <input type="email" placeholder ="Your email"/>
                        <button type="button">Join</button>
                    </div>
                    <div className="footer__socials">
                        <a href='#'>Ig</a>
                        <a href="#">Pn</a>
                        <a href='#'>wa</a>
                        <a href='#'>yt</a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <span>© 2026 B Forge · Made with love in Bhopal</span>
                <div className="footer__legal">
                    <a href='#'>Privacy</a>
                    <a href='#'>Terms</a>
                    <a href='#'>Shipping</a>
                    <a href='#'>Returns</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer