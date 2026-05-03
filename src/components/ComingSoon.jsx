import './ComingSoon.css'

function ComingSoon(){
    return(
        <main className="coming-soon">
            <div className="cs-content">
                <p className="cs-label">VITUAL TRY-ON</p>
                <h1 className="cs-heading">Something<br />
                <span className="gold">Extraordinary</span><br/>
                is Coming
                </h1>
                <p className="cs-desc">
                    Try kurtis on yourself - virtually, before you buy.
                    Powered by AI. Coming soon.
                </p>
                <div className="cs-notify">
                    <input type="email"  placeholder="Enter you email" className="cs-input"/>
                    <button className="cs-btn">Notify me </button>
                </div>
            </div>
        </main>
    )
}
export default ComingSoon