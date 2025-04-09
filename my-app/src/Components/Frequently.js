import "./Frequently.css";
const Questions = () =>{
    return(
        <div>
            <div className="dropdown-container">
                <h1><b>Frequently Asked Questions</b></h1>
                <p>Everything you need to know about the product and billing.</p>
                <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How can I apply for a lone through FairNeft?
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Users can apply online by filling out an application form and submitting the necessary documents
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What documents are required for a lone application?
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Common documents include Aadhar card, PAN card, and proof of income.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How can I check my CIBIL sorce for free?
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Simply provide your PAN number and Aadhar number (optional) to get your free CIBIL score.
                    </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        How lone does it take to get a lone approved?
                    </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Loan approval times vary, but users typically receive a response within 48-72 hours.
                    </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Can I repay my lone early?
                    </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Yes, users can repay their loans early. Prepayment penalties may apply based on the loan terms.
                    </div>
                    </div>
                </div>
                </div> 
            </div>  

            <div className="SQuestions">
                <img src="http://fairneft.com/Images/Avatar%20group.svg" alt=" " className="SQ-image"></img>
                <h5><b>Still have questions?</b></h5>
                <p>Can’t find the answer you’re looking for? Please chat with our friendly team.</p>
                <button>Get in Touch</button>
            </div> 
        </div>
    );
}
export default Questions;