import { useState } from "react";
import Cards from "./components/Cards";
import CardsForm from "./components/CardsForm";

const details = {
  cardholderName: "",
  cardNumber: "",
  expDate: ["", ""],
  cvc: "",
};

const App = () => {
  const [cardDetails, setCardDetails] = useState(details);
  return (
    <main>
      <Cards cardDetails={cardDetails} />
      <CardsForm cardDetails={cardDetails} />
    </main>
  );
};

export default App;
