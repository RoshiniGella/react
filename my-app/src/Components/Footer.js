import "./Footer.css";
const FooterContainer = () =>{
    return(
        <div className="Total-FOOTER">
            <footer>
                <div className="footer-container">
                    <div className="footer1">
                        <img src="http://fairneft.com/Images/Footerlogo.svg" alt=" " className="image1"></img>
                        <div>
                                <label for="Email">Email:</label><br></br>
                                <a class="Email"  href="connect@fairneft.com" >connect@fairneft.com</a><br></br>
                        </div>
                        <div className="f1-Contact">
                                <label for="Con">Contact:</label><br></br>
                                <a class="Con"  href="9160009222">9160009222</a>
                        </div>
                        <div>
                                <label for="Office Address">Office Address:</label><br></br>
                                <a class="Office Address"  href="5B" >5B, 5th Floor, Dhanalaxmi Towers, Dharam Karam Road, Ameerpet, Hyderabad - 500016</a><br></br>
                        </div>
                    </div>


                    <div className="footer2">
                        <h5>Credit Solutions</h5>
                        <ul>
                            <li><a href="#">Business Loan</a></li>
                            <li><a href="#">Education Loan</a></li>
                            <li><a href="#">Home Loan</a></li>
                            <li><a href="#">Loan Against Property</a></li>
                            <li><a href="#">Machinery Loan</a></li>
                            <li><a href="#">Overdraft</a></li>
                            <li><a href="#">Personal Loan</a></li>
                            <li><a href="#">Professional Loan</a></li>
                            <li><a href="#">Vehicle Loan</a></li>
                        </ul>
                    </div>

                    <div className="footer3">
                        <h5>Insurances</h5>
                        <ul>
                            <li><a href="#">Car Insurance</a></li>
                            <li><a href="#">Health Insurance</a></li>
                            <li><a href="#">Investment Plan</a></li>
                            <li><a href="#">Term Life Insurance</a></li>
                        </ul>
                    </div>

                    <div className="footer4">
                        <h5>Resources</h5>
                        <ul>
                            <li><a href="#">Help Centre</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                        <h5>Social Media</h5>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">WhatsApp</a></li>
                            <li><a href="#">Youtube</a></li>
                        </ul>
                    </div>
                    
                </div>
                <p>© 2025 FairNeft. All rights reserved.</p>
            </footer>
            
        </div>
    );
}
export default FooterContainer;