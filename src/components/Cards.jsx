const Cards = ({ cardDetails }) => {
  return (
    <div className="section1">
      <div className="card-front">
        <img src="/images/bg-card-front.png" alt="card front" />
        <div className="card-front-info">
          <img src="/images/card-logo.svg" />
          <p className="card-number">
            {cardDetails.cardNumber
              ? cardDetails.cardNumber
              : "0000 0000 0000 0000"}
          </p>
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
        <p className="card-back-info">{"000"}</p>
      </div>
    </div>
  );
};

export default Cards;
