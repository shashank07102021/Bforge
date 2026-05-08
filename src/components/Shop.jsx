import './Shop.css'
function Shop(){
    const products=[
        {id:1,name:"Zari Bloom",price:"₹599",tag:"BESTSELLEER",ocasion:"festive"},
        {id:2,name:"Indigo Dreams",price:"₹599",tag:"NEW",ocasion:"Casual"},
        {id:3,name:"Ivory Grace",price:"₹599",tag:"FESTIVE",ocasion:"festive"},
        {id:4,name:"Zari Bloom",price:"₹599",tag:"",ocasion:"festive"},
        {id:5,name:"Zari Bloom",price:"₹599",tag:"NEW",ocasion:"CASUAL"},
        {id:6,name:"Zari Bloom",price:"₹599",tag:"LIMITED",ocasion:"festive"}
    ]

return(
    <main className="shop">
        <div className="shop-header">
            <p className="shop-label">OUR COLLECTION</p>
            <h1 className="shop-heading">EVERY KURTI,<br />
                <span className="gold"> A STORY.</span>
            </h1>
        </div>
        <div className="shop-grid">
            {products.map((product)=>(
                <div key={product.id} className="product-card" >
                    <div className="product-image">
                        {product.tag&&<span className="product-tag">{product.tag}</span>}
                    </div>
                    <div className="product-info">
                        <p className="product-occasion">{product.ocasion}</p>
                        <h3 className="product-name">{product.name}</h3>
                        <div className="product-bottom">
                            <span className="product-price">{product.price}</span>
                            <button className="add-cart"> Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </main>
)
}
export default Shop