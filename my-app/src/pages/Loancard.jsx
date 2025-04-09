export default function LoanCard({loansData, id}) {
    
    return (
      <>
        <div className={`boxcontainer1 ${id%2!=0 ? "box-reverse" : " "}`}>
          <div class="info">
            <div class="p1">
              <h4>{loansData.heading1}</h4>
            </div>
            <div class="p2">
              <h2>{loansData.heading2}</h2>
            </div>
            <div class="p3">
              <p>
              {loansData.description}
              </p>
            </div>
            <div class="p4">
              <p>{loansData.aboutLoan}</p>
            </div>
            <div class="p5">
              <div>
                <button class="p6">{loansData.button1}</button>
              </div>
              <div>
                <button class="p7">{loansData.button2}</button>
              </div>
            </div>
          </div>
          <div>
            <img
              src={loansData.imageUrl}
              class="img1"
            ></img>
          </div>
        </div>
      </>
    );
  }
  