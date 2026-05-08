import './Hero.css'
function Hero(){
    const words=[
        {t:'She'},
        {t:'Drapes.',italic:true},
        {t:'She'},
        {t:'Slays.',outline:true},
        {t:"She's"},
        {t:'B Forge.',italic:true},

    ]
    return(
        <section className="hero" id="hero">
            <div className="hero__inner">
                <span className="eyebrow hero__eyebrow">
                    Spring/Summer · Edit 04
                </span>
            
            <h1 className="hero__headline">
                {words.map((w,i)=>(
                    <span 
                    key={i}
                    className={`word ${w.italic ?'italic' : ''} ${w.outline ? 'outline':''}`}
                    style={{ animationDelay: `${0.15 + i *0.12}s`}}
                    >
                        {w.t}
                    </span>
                ))}
            </h1>
            <p className="hero__sub">
                Handcrafted  kurtis  from  the looms  of Bhopal - tailored  for the 
                modern  indian  woman  who treats   getting  dressed like  a quite ceremony.
            </p>
            <div className="hero__ctas">
                <a className="btn" href="#collection" >
                    Shop the Edit <span className ="arrow">→</span>
                </a>
                <a className="btn btn--ghost" href="#mood-finder">
                    Find Your Drape 
                </a>
            </div>
            <div className="hero__stats">
                <div className="hero__stat">
                    <div className="num">100 <em>%</em></div>
                    <div className="label">Handcrafted  in Bhopal </div>
                </div>
                <div className="hero__stat">
                    <div className="num">₹<em>599</em></div>
                    <div className="label">Per Kurti</div>
                </div>
                <div className="hero__stat">
                    <div className="num">4<em>days</em></div>
                    <div className="label">Delivery </div>
                </div>
            </div>
            </div>
            <div className="hero__cards">
                <div className="float-card float-card--1">
                    <span className="float-card__tag "> New · Festive</span>
                    <div className="ph ph--sand">
                        <div className="ph__label">Editorial · Festive Kurti</div>
                    </div>
                    <div className="float-card__caption">
                        <div className="float-card__name">kurti 01</div>
                        <div className="float-card__price">₹ 599</div>
                    </div>
                </div>
                <div className="float-card float-card--2">
                    <span className="float-card__tag "> Bestseller</span>
                    <div className="ph ph--ink">
                        <div className="ph__label">Mood · Daily Drape</div>
                    </div>
                    <div className="float-card__caption">
                        <div className="float-card__name">kurti 02</div>
                        <div className="float-card__price">₹ 599</div>
                    </div>
                </div>
                <div className="float-card float-card--3">
                    <span className="float-card__tag ">Limited</span>
                    <div className="ph ph--ivory">
                        <div className="ph__label">Hand-block · Cotton</div>
                    </div>
                    <div className="float-card__caption">
                        <div className="float-card__name">kurti 03 </div>
                        <div className="float-card__price">₹ 599</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero