import './Hero.css'

function Hero(){
    return(
        <main className="hero">
            <div className= "hero-content">
                <p className="hero-sub">Handcrafted Ethinic Wear</p>
                <h1 className="hero-tagline">
                    <span>She Drapes. </span>
                    <span>She Slays.</span>
                    <span className="gold">She's B Forge.</span>
                </h1>
                <p className= "hero-desc">
                    Premium kurtis  crafted  for the  modern Indian Woman.
                    Where tradition  meets contemporary  design.
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary">Explore Collection</button>
                    <button className="btn-secondary">Try It On</button>
                </div>
            </div>
        </main>
    )
}
export default Hero