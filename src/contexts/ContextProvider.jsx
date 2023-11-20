import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const details = {
  cardholderName: "",
  cardNumber: "",
  expDate: ["", ""],
  cvc: "",
};

const errorDetails = {
  cardholderName: {
    haveError: false,
    errorText: "",
  },
  cardNumber: {
    haveError: false,
    errorText: "",
  },
  expDate: {
    haveError1: false,
    haveError2: false,
    errorText: "",
  },
  cvc: {
    haveError: false,
    errorText: "",
  },
};

export const ContextProvider = ({ children }) => {
  const [cardDetails, setCardDetails] = useState(details);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(errorDetails);

  const handleNameChange = (e) => {
    setCardDetails({
      ...cardDetails,
      cardholderName: e.target.value.toUpperCase().slice(0, 25),
    });
  };

  const handleCardNumber = (e) => {
    setCardDetails({
      ...cardDetails,
      cardNumber: e.target.value.slice(0, 16).toUpperCase(),
    });
  };

  const handleCvc = (e) => {
    setCardDetails({
      ...cardDetails,
      cvc: e.target.value.slice(0, 3),
    });
  };

  const handleSubmit = () => {
    setCompleted(!completed);
  };

  return (
    <StateContext.Provider
      value={{
        cardDetails,
        handleNameChange,
        handleCardNumber,
        handleCvc,
        completed,
        handleSubmit,
        error,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
