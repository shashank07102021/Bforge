import './Marquee.css'

function Marquee(){
    const items=[
        "HANDCRAFTED ETHINIC WEAR",
        "FREE DELIVERY ABOVE ₹599",
        "VIRTUAL TRY-ON  Coming Soon",
        "ORIGINAL DESIGNS",
        "MADE WITH LOVE"        
    ]

    return(
        <div className="marquee-wrapper">
            <div className="marquee-track">
                {items.map((item,index) => (
                    <span key={index} className="marquee-item">
                        {item}<span className="marquee-dot">◆</span>
                    </span>
                ))}{items.map((item,index)=>
                <span key={index+items.length} className="marquee-item">
                    {item}<span className="marquee-dot">◆</span>
                </span>
                )}
            </div>
            </div>
    )
}
export default Marquee