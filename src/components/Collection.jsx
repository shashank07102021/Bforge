import {useState}from 'react'
import './Collection.css'
const PRODUCTS=[
    {
        id:1,
        name:"Kurti 01",
        sub:"Festive · Handcrafted",
        price:"₹ 599",
        tone:"sand",
        badge:"NEW",
        occasion:["Festive"]
    },
    {
        id:2,
        name:"Kurti 02",
        sub:"Casual · Cotton",
        price:"₹ 599",
        tone:"ink",
        badge:"BESTSELLER",
        occasion:["Casual"]
    },
     {
        id:3,
        name:"Kurti 03",
        sub:"Daily · Mulmul",
        price:"₹ 599",
        tone:"ivory",
        badge:"",
        occasion:["Daily"]
    }
]
const FILTERS=["All","Festive","Casual","Daily"]
function Collection(){
    const[active,setActive]=useState("All")

    const filtered=active=="All"
    ?PRODUCTS
    :PRODUCTS.filter((p)=>p.occasion.includes(active))
    return(
        <section className="collection" id="collection">
            <div className="collection__head">
                <div className="collection__intro">
                    <span className="eyebrow">The Edit· 03 Pieces</span>
                    <h2 className="section-title">
                        Featured <em>drapes</em><br />
                        for every mood.
                    </h2>
                    <p className="collection__lede">
                        Three  pieces handcrafted  this season - each cut and finished 
                        by our karigars.Filter by where you'll wear it.
                    </p>
                </div>
                <div className="collection__filters">
                    {FILTERS.map((f)=>(
                        <button
                        key={f}
                        className={`chip ${active === f ? 'chip--active':''}`}
                        onClick={()=>setActive(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>
            <div className="products">
                {filtered.map((p)=>(
                    <article  className="product"key={p.id}>
                        <div className="product__media">
                            {p.badge&&(
                                <span className="product__badge">{p.badge}</span>
                            )}
                        <div className={`ph ph--${p.tone}`}>
                            <div className="ph__label">{p.name}</div>
                        </div>
                        <div className="product__overlay">
                            <span className="product__quick">Quick view</span>
                        </div>
                        </div>
                        <div className="product__meta">
                            <div>
                                <h3 className="product__name">{p.name}</h3>
                                <div className="product__sub">{p.sub}</div>
                            </div>
                            <div className="product__price">{p.price}</div>
                        </div>
                    </article>
                ))}
                <article className="product product--soon">
                    <div className="product__media">
                        <span className="product__badge">COMING SOON</span>
                        <div className="ph ph--sand">
                            <div className="ph__label">New Drop · Stay Tuned</div>
                        </div>
                        
                        <div className="product__soon-overlay">
                            <p className="soon__text">New drop  dropping soon</p>
                            <a href="#" className="btn btn--ghost soon__btn">
                                Join Waitlist →
                            </a>
                        </div>
                    </div>
                        <div className="product__meta">
                            <div>
                                <h3 className="product__name">New Drop</h3>
                                <div className="product__sub">Coming This Friday</div>
                        </div>
                    </div>
                </article>

            </div>
            <div className="collection__foot">
                <a className="btn btn--ghost" href="/collection">
                View  the full collection<span className="arrow">→</span>
                </a>
            </div>
        </section>
    )
}
export default Collection