import "./Status.css"

const Status = () => {
    return(
        <>
            <div className="eligible">
                <div className="info">
                    <h1>Know Your <span className="green">CIBIL Score</span> – Unlock Better Financial Opportunities!</h1>
                    <div>
                        <p className='p1'>Your CIBIL Score is the key to faster loan approvals, 
                        lower interest rates, and better financial opportunities. 
                        Whether applying for a personal loan, home loan, or credit card, lenders use 
                        your CIBIL Score to evaluate your creditworthiness.</p>
                    </div>
                    <div>
                        <p className='p2'>At FairNeft, we help you check your CIBIL Score 
                        instantly for free, understand your credit health, 
                        and improve your score for better financial freedom!</p>
                    </div>
                    <div>
                        <p className='p3'>Your financial future depends on your credit health—know your score today!</p>
                    </div>
                    <div>
                        <button className="check">Check Eligibility</button>
                    </div>
                </div>
                <div>
                    <img src="http://fairneft.com/Images/Cibilscore.svg" className='img'></img>
                </div>
            </div>
            <div className='loaneligible'>
                <div className='loan'>
                    <div className='heading'>
                        <h1>Know Your <span class='green'> Loan Eligibility </span> Instantly!</h1>
                    </div>
                    <div>
                        <p>Wondering if you qualify for a personal, home, business, 
                        or vehicle loan? With FairNeft’s Loan Eligibility Checker,
                        you can instantly determine your loan amount, interest rates, and 
                        repayment options based on your income, credit score, and financial history.</p>
                    </div>
                    <div>
                        <button className="check1">Check Eligibility</button>
                    </div>
                </div>
                <div>
                    <img src="http://fairneft.com/Images/Loaneligibility.svg" className='img1'></img>
                </div>
            </div>
            {/* <div className='vlog'>
                <h3>WHY CHOOSE US?</h3>
                <h1>Empowering Your Financial Journey
                with <span class='green'>Trust, Transparency,</span> and <span class='green'>Tailored</span>  Solutions</h1>
                <p className='para'>At Fairnet, we believe in simplifying your financial decisions and providing solutions that truly matter. Here’s why you can trust us:</p>
                <div className='content'>
                    <div className='sideheadings'>
                        <p>Tailored Solutions</p><hr></hr>
                        <p>Trusted Partners</p><hr></hr>
                        <p>Transparency Guaranteed</p><hr></hr>
                        <p>Expert Guidance</p><hr></hr>
                        <p>Seamless Experience</p><hr></hr>
                        <p>Customer-Centric Approach</p><hr></hr>
                    </div>
                    <div className='theory'>
                        <p>Whether you're investing, insuring, or borrowing, we offer personalized options that align with your unique needs and goals.</p><hr></hr>
                        <p>Partnered with leading financial institutions and insurers, ensuring you get the best products and services in the market.</p><hr></hr>
                        <p>No hidden fees or surprises. Enjoy a clear, straightforward process for all your financial needs.</p><hr></hr>
                        <p>Our team of experts is here to guide you at every step, from choosing the right product to managing your finances efficiently.</p><hr></hr>
                        <p>With an intuitive platform and quick processing, we make managing your finances easy, accessible, and stress-free.</p><hr></hr>
                        <p>Your satisfaction is our priority. We’re dedicated to delivering excellent service and unparalleled support.</p> <hr></hr>
                    </div>
                </div> 
                </div>*/}
            <div className="FJ-container">
                <div className="FJ">
                    <h2>WHY CHOOSE US?</h2>
                    <h1>Empowering Your Financial Journey with <span>Trust, Transparency</span>, and <span>Tailored</span> Solutions</h1>
                    <p><b>At Fairnet, we believe in simplifying your financial decisions and providing solutions that truly matter. Here’s why you can trust us:</b></p>
                    <table className="FJ-table">
                        <tr>
                            <th>Tailored Solutions</th>
                            <td>Whether you're investing, insuring, or borrowing, we offer personalized options that align with your unique needs and goals.</td>
                        </tr>
                        
                        <hr ></hr>
                        

                        <tr>
                            <th>Trusted Partners</th>
                            <td>Partnered with leading financial institutions and insurers, ensuring you get the best products and services in the market.</td>
                        </tr>
                        <hr></hr>

                        <tr>
                            <th>Transparency Guaranteed</th>
                            <td>No hidden fees or surprises. Enjoy a clear, straightforward process for all your financial needs.</td>
                        </tr>
                        <hr></hr>

                        <tr>
                            <th>Expert Guidance</th>
                            <td>Our team of experts is here to guide you at every step, from choosing the right product to managing your finances efficiently.</td>
                        </tr>
                        <hr></hr>

                        <tr>
                            <th>Seamless Experience</th>
                            <td>With an intuitive platform and quick processing, we make managing your finances easy, accessible, and stress-free.</td>
                        </tr>
                        <hr></hr>

                        <tr>
                            <th>Customer-Centric Approach</th>
                            <td>Your satisfaction is our priority. We’re dedicated to delivering excellent service and unparalleled support.</td>
                        </tr>
                        <hr></hr>

                    </table>
                </div>   
            </div>
        

            
            <div className='contact'>
                <div className='form'>
                    <h1 className='query'>We’re Here to Help –
                    Reach Out for Support or Queries Anytime!</h1>
                <form>
                    <div className='first'>
                        <div className="name-field">
                            <label htmlFor='firstName'>First name</label>
                            <input type="text" id='firstName' name="firstName" placeholder="First name"/><br></br></div>
                        <div className="name-field">
                            <label htmlFor='LasttName'>Last name</label>
                            <input type="text" id="LastName" name="LastName" placeholder="Last name"/><br></br></div>
                    </div>
                    <label htmlFor='firstName'>Email</label><br></br>
                    <input type="email" id='firstName' name="firstName" placeholder="example@gmail.com"/><br></br><br></br>
                    <label htmlFor='msg'>Message</label><br></br>
                    <textarea placeholder="Your Message" id="textarea"></textarea><br></br>
                    {/* <label className="checkbox-label">
                    <input type="checkbox" name="privacyPolicy" />
                    You agree to our friendly privacy policy <a href="/privacy-policy" target="_blank"></a>.
                    </label> */}
                    <button className="formbtn">submit</button>
                </form>
                </div>
                <div>
                    <img src="http://fairneft.com/Images/Contact.svg" className='image'></img>
                </div>
            </div>
        </>
    )
}

export default Status