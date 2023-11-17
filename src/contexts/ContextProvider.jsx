import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const details = {
  cardholderName: "",
  cardNumber: "",
  expDate: ["", ""],
  cvc: "",
};

export const ContextProvider = ({ children }) => {
  const [cardDetails, setCardDetails] = useState(details);

  const handleNameChange = (e) => {
    setCardDetails({
      ...cardDetails,
      cardholderName: e.target.value.toUpperCase().slice(0, 25),
    });
  };

  const handleCardNumber = (e) => {
    setCardDetails({
      ...cardDetails,
      cardNumber: e.target.value.slice(0, 16),
    });
  };

  const handleCvc = (e) => {
    setCardDetails({
      ...cardDetails,
      cvc: e.target.value.slice(0, 3),
    });
  };

  return (
    <StateContext.Provider
      value={{
        cardDetails,
        handleNameChange,
        handleCardNumber,
        handleCvc,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
