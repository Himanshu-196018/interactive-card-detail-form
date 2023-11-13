const Cards = () => {
  return (
    <div className="section1">
      <div className="card-front">
        <img src="/images/bg-card-front.png" alt="card front" />
        <div className="card-front-info">
          <img src="/images/card-logo.svg" />
          <p className="card-number">{"0000 0000 0000 0000"}</p>
          <p className="bottom-info">
            <span>{"JANE APPLESEED"}</span>
            <span>{"00/00"}</span>
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
