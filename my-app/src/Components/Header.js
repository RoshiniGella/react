import './Header.css'
const Header= () =>{
    return(
        <>
        <div className="subscribe">
            <div className="info">
                <h1>Subscribe to the Newsletter</h1>
                <p>Join thousands of smart investors & borrowers—stay ahead in your financial journey!</p>
                <div className='buttons'>
                    <button className="email">Email</button>
                    <button className="subs">subscribe</button>
                </div>
            </div>
            <div>
                <img src="http://fairneft.com/Images/Frame 1597882863.svg" className="image"></img>
            </div>

        </div>
        
        </>
    )
}
export default Header;