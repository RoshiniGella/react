import './navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='main'>
                <div className='div1'>
                <img src="http://fairneft.com/Images/logo.svg"></img>
                </div>
                <div className='div2'>
                <p>Home</p>
                <p>About Us</p>
                <p>Products</p>
                <p>Contact</p>
                <p>FAQ</p>
                <p>CIBIL Score</p>
                <p>Loan Eligibility</p>
                </div>
                
                <div className='div3'>
                <p>Login</p>
                <button className='navbtn'>Register</button>
                </div>
            </div>
            <div className='main2'>
                <div class='info'>
                    <h1>Empower Your Financial Future</h1>
                    <div class='paragraph'>
                    <p>At FairNeft, we believe that financial security should be accessible,
                    hassle-free, and tailored to your needs. Whether you're looking for
                    a quick loan, a high-return investment plan, or comprehensive 
                    insurance coverage, we are here to provide you with the best 
                    financial solutions.</p>
                    <p>With a team of seasoned financial experts, 
                    cutting-edge technology, and a customer-first approach, we have helped 
                    thousands of individuals and businesses achieve financial freedom
                    and secure their future. 
                    </p>
                    </div>
                    <div class='btns'>
                        <div><button className='App'>Apply For Loan</button></div>
                        <div><button className='Ask'>Ask Expert</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar