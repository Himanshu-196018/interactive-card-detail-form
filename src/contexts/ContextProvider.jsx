import { createContext, useContext, useEffect, useState } from "react";

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

  function checkValidInput() {
    const copyError = { ...errorDetails };
    // checking error in cardholder Name
    if (cardDetails.cardholderName === "") {
      copyError.cardholderName = {
        haveError: true,
        errorText: "Can't be blank",
      };
    } else {
      copyError.cardholderName = errorDetails.cardholderName;
    }

    // checking error in card number
    if (cardDetails.cardNumber === "") {
      copyError.cardNumber = {
        haveError: true,
        errorText: "Can't be blank",
      };
    } else if (cardDetails.cardNumber.length < 16) {
      copyError.cardNumber = {
        haveError: true,
        errorText: "Should contain 16 digit",
      };
    } else if (!/\d/.test(cardDetails.cardNumber)) {
      copyError.cardNumber = {
        haveError: true,
        errorText: "Wrong format, numbers only",
      };
    } else {
      copyError.cardNumber = errorDetails.cardNumber;
    }

    if (cardDetails.cvc === "") {
      copyError.cvc = {
        haveError: true,
        errorText: "Can't be blank",
      };
    } else if (cardDetails.cvc.length < 3) {
      copyError.cvc = {
        haveError: true,
        errorText: "Should be 3 digit long",
      };
    } else {
      copyError.cvc = errorDetails.cvc;
    }

    setError(copyError);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checkValidInput();
    setError((prevError) => {
      if (!Object.values(prevError).some((field) => field.haveError)) {
        setCompleted(true);
      }
      return prevError;
    });
  };

  const handleContinue = () => {
    setCardDetails(details);
    setError(errorDetails);
    setCompleted(false);
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
        handleContinue,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
