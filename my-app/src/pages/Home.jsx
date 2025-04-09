import LoanCard from "../pages/Loancard"
import "../Components/boxes.css"

export default function Home() {
  const loansData = [
    {
      heading1: "OUR CREDIT SOLUTIONS",
      heading2: "Personal Loan",
      description: `Need urgent funds? Whether it's for a medical emergency, travel,
                        wedding, education, or debt consolidation, FairNeft's 
                        Personal Loan offers you quick financial support with low 
                        interest rates and flexible repayment options.`,
      aboutLoan: `Life is unpredictable,
                        but your finances don't have to be!`,
      button1: "Apply For Loan",
      button2: "Ask Expert",
      imageUrl: "http://fairneft.com/Images/Group%206.png",
    },
    {
      heading2: "Business Loan",
      description: `Whether you're expanding your business, managing cash flow, 
                        purchasing equipment, or hiring top talent, FairNeft’s Business 
                        Loans provide the financial support you need—fast, flexible, and hassle-free!
                        Choose between Secured Business Loans (backed by assets for lower interest rates)
                        or Unsecured Business Loans (no collateral required, just quick access to funds).`,
      aboutLoan: `Your business deserves the best financial support—apply 
                  today and watch it grow!!`,
      button1: "Apply For Loan",
      button2: "Ask Expert",
      imageUrl: "http://fairneft.com/Images/Businessloan.png",
    },
    {
      heading2: "Home Loan",
      description: `Your dream home is closer than you think! 
                        Whether you're buying a new house, building your own, renovating your space,
                        or refinancing an existing loan, FairNeft’s Home Loan offers affordable EMIs,
                        flexible tenures, and instant approvals—all with minimal paperwork and a 100% digital 
                        process. Say goodbye to financial stress and hello to homeownership made easy!.`,
      aboutLoan: `Don’t just dream of your perfect home—move
                  in faster with FairNeft!`,
      button1: "Apply For Loan",
      button2: "Ask Expert",
      imageUrl: "http://fairneft.com/Images/Homeloan.png",
    },
    {
      heading2: "Loan Against Property",
      description: `Need funds for business expansion, education, medical emergencies, 
                        or personal expenses? FairNeft’s Loan Against Property (LAP) helps you 
                        leverage your residential, commercial, or industrial property to secure high-value 
                        loans at low-interest rates. Keep ownership of your property while enjoying flexible 
                        repayment tenures and quick disbursals—all with a hassle-free process and minimal paperwork!`,
      aboutLoan: `Why let your property sit idle? Put it to 
                        work for you today!`,
      button1: "Apply For Loan",
      button2: "Ask Expert",
      imageUrl: "http://fairneft.com/Images/LoanAginst.png",
    },
    {
      heading2: "Overdraft",
      description: `Need quick access to funds for business expenses, personal needs,
                    or emergencies? With FairNeft’s Overdraft Facility, you get a pre-approved 
                    credit limit that you can withdraw from anytime, anywhere, and pay interest only on the amount used. 
                    Whether you're a salaried professional or a business owner, our overdraft gives you the freedom to borrow, 
                    repay, and re-borrow as needed—without any extra charges!!`,
      aboutLoan: `Need urgent cash? Get access to funds instantly!`,
      button1: "Apply For Loan",
      button2: "Ask Expert",
      imageUrl: "http://fairneft.com/Images/Overdraft.png",
    },
    {
      heading2: "Professional Loan",
      description: `Are you a doctor, chartered accountant, engineer, 
                    consultant, or architect looking for funds to expand your practice,
                    upgrade equipment, or manage professional expenses? FairNeft’s Professional Loan offers high 
                    loan amounts, low-interest rates, and flexible repayment options—all with zero collateral
                    and minimal paperwork!`,
      aboutLoan: `Take the next step in your career—apply for
                  a professional loan today!`,            
      button1: "Apply For Loan",
      button2: "Ask Expert",
      imageUrl: "http://fairneft.com/Images/Doctorimg.png",
    },
    {
      heading2: "Education Loan",
      description: `Dreaming of studying at a top university but worried about finances? 
                    With FairNeft’s Education Loan, you get 100% financing for tuition, living expenses,
                    travel, and more—so you can focus on your education, not your finances. 
                    Whether it's in India or abroad, we offer low-interest rates, flexible repayment options, 
                    and quick approvals to help you achieve your academic goals without stress.`,
      aboutLoan: `Invest in your career growth—apply today!`,            
      button1: "Apply For Loan",
      button2: "Ask Expert",
      imageUrl: "http://fairneft.com/Images/Educationloan.png", 
    },
    {
      heading2: "Vehicle Loan",
      description: `Looking to buy a new or used car, bike, or commercial 
                    vehicle? With FairNeft’s Vehicle Loan, you can drive home your dream ride 
                    without worrying about finances! We offer low-interest rates, up to 100% 
                    financing, and flexible repayment options—all with quick
                    approvals and minimal paperwork.`,
      aboutLoan: `Don’t wait—get on the road with FairNeft’s easy vehicle loans!`,            
      button1: "Apply For Loan",
      button2: "Ask Expert",
      imageUrl: "http://fairneft.com/Images/Vehicleloan.png",
    },
    {
      heading2: "Machinery Loan",
      description: `Looking to upgrade or purchase new machinery for your business?
                    With FairNeft’s Machinery Loan, you can equip your enterprise with the latest 
                        technology without financial strain! We offer low-interest rates, 
                        up to 100% financing, and flexible repayment options—all with quick approvals 
                        and minimal paperwork.`,
      aboutLoan: `Don’t let outdated equipment slow you down—apply 
                        for a machinery loan today!`,            
      button1: "Apply For Loan",
      button2: "Ask Expert",
      imageUrl: "http://fairneft.com/Images/Mechineryloan.png",
    },
    {
      heading2: "Term Life Insurance",
      description: `Life is unpredictable, but your family’s financial security shouldn’t be. 
                    With FairNeft’s Term Life Insurance, you can ensure your loved ones are financially
                    protected in case of life’s uncertainties. Get high coverage at affordable premiums, 
                    flexible policy terms, and additional benefits like critical illness cover, 
                    accidental death benefit, and disability protection—so you can live worry-free 
                    knowing your family is always secure.`,
      aboutLoan: `Because Your family deserves the best protection!!`,            
      button1: "Apply For Loan",
      button2: "Ask Expert",
      imageUrl: "http://fairneft.com/Images/Termlifeinsurance.png",
    },
    {
      heading2: "Health Insurance",
      description: `Medical emergencies can happen anytime, but financial stress shouldn’t. 
                    With FairNeft’s Health Insurance, get cashless hospitalization, 
                    pre- & post-hospitalization coverage, and critical illness protection—so you
                    and your loved ones get the best medical care without worrying about expenses. 
                    Choose from individual plans, family floater plans, senior citizen policies, 
                    and critical illness cover, all with low premiums and high coverage.`,
      aboutLoan: `Your health is priceless—get insured today!`,            
      button1: "Apply For Loan",
      button2: "Ask Expert",
      imageUrl: "http://fairneft.com/Images/Healthinsurance.png",
    },
    {
      heading2: "Vehicle Insurance",
      description: `Your vehicle is more than just a mode of transport—it’s your freedom, 
                    convenience, and investment. With FairNeft’s Vehicle Insurance, 
                    safeguard your car, bike, or commercial vehicle against accidents, 
                    theft, natural disasters, and third-party liabilities.
                    Get instant policy issuance, cashless claims, and hassle-free renewals, 
                    all at affordable premiums!`, 
      aboutLoan:`Drive with peace of mind—get full coverage today!`,         
      button1: "Apply For Loan",
      button2: "Ask Expert",
      imageUrl: "http://fairneft.com/Images/Vehicleinsurance.png",
    },
    {
      heading2: "Investment Plan",
      description: `At FairNeft, we help you build wealth, 
                    secure your future, and achieve financial independence with our 
                    tailored investment plans. Whether you're planning for retirement, 
                    your child’s education, or wealth creation, our expert-designed investment 
                    solutions provide high returns, tax benefits, and flexible options
                    to match your financial goals.`, 
      aboutLoan:`Make your money work for you—start today!`,         
      button1: "Apply For Loan",
      button2: "Ask Expert",
      imageUrl: "http://fairneft.com/Images/Investmentplan.png",
    },
];


  return (
    <>
    {
        loansData.map((ele,index)=>{
            return <LoanCard loansData = {ele} id={index}/>
        })
    }
    </>
  );
}
