import { useStateContext } from "../contexts/ContextProvider";

const Cards = () => {
  const { cardDetails } = useStateContext();

  const cardNumber = (num) => {
    let ans = "";
    for (let i = 0; i < 16; i++) {
      if (i % 4 == 0) ans = ans + " ";
      if (num.length > i) {
        ans = ans + num[i];
      } else {
        ans = ans + "0";
      }
    }
    return ans;
  };

  return (
    <div className="section1">
      <div className="card-front">
        <img src="/images/bg-card-front.png" alt="card front" />
        <div className="card-front-info">
          <img src="/images/card-logo.svg" />
          <p className="card-number">{cardNumber(cardDetails.cardNumber)}</p>
          <p className="bottom-info">
            <span>
              {cardDetails.cardholderName
                ? cardDetails.cardholderName
                : "JANE APPLESEED"}
            </span>
            <span>{`${cardDetails.expDate[0] ? cardDetails.expDate[0] : "00"}/${
              cardDetails.expDate[1] ? cardDetails.expDate[1] : "00"
            }`}</span>
          </p>
        </div>
      </div>
      <div className="card-back">
        <img src="/images/bg-card-back.png" alt="card back" />
        <p className="card-back-info">
          {cardDetails.cvc + "000".slice(cardDetails.cvc.length)}
        </p>
      </div>
    </div>
  );
};

export default Cards;
