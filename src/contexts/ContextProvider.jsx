import { createContext, useContext, useState } from "react";

const StateContext = createContext();

// initial Data to make a state
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

const year = new Date().getFullYear() % 100;

// creating custom hooks to manage state globally with useContext hook
export const ContextProvider = ({ children }) => {
  // declaring states
  const [cardDetails, setCardDetails] = useState(details);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(errorDetails);

  /* **************************************** */
  // handling input details for form
  /* **************************************** */
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

  const handleMonthChange = (e) => {
    setCardDetails({
      ...cardDetails,
      expDate: [e.target.value.slice(0, 2), cardDetails.expDate[1]],
    });
  };
  const handleYearChange = (e) => {
    setCardDetails({
      ...cardDetails,
      expDate: [cardDetails.expDate[0], e.target.value.slice(0, 2)],
    });
  };

  const handleCvc = (e) => {
    setCardDetails({
      ...cardDetails,
      cvc: e.target.value.slice(0, 3),
    });
  };

  /* **************************************** */
  // function to validate form details
  /* **************************************** */
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
    } else if (/\D/.test(cardDetails.cardNumber)) {
      copyError.cardNumber = {
        haveError: true,
        errorText: "Wrong format, numbers only",
      };
    } else {
      copyError.cardNumber = errorDetails.cardNumber;
    }

    // checking error in exp Date
    if (cardDetails.expDate[0] === "" || cardDetails.expDate[1] === "") {
      copyError.expDate = {
        haveError1: cardDetails.expDate[0] ? false : true,
        haveError2: cardDetails.expDate[1] ? false : true,
        errorText: "Can't be blank",
      };
    } else if (cardDetails.expDate[0] > 12 || cardDetails.expDate[1] <= year) {
      copyError.expDate = {
        haveError1: cardDetails.expDate[0] > 12 ? true : false,
        haveError2: cardDetails.expDate[1] <= year ? true : false,
        errorText: "Should be a valid exp Date",
      };
    } else {
      copyError.expDate = errorDetails.expDate;
    }

    // checking for error in cvc
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

  /* **************************************** */
  // function to handle submit button
  /* **************************************** */
  const handleSubmit = (e) => {
    e.preventDefault();
    checkValidInput();
    setError((prevError) => {
      if (
        !Object.values(prevError).some(
          (field) => field.haveError || field.haveError1 || field.haveError2
        )
      ) {
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
        handleMonthChange,
        handleYearChange,
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

// exporting custom hook useStateContext
export const useStateContext = () => useContext(StateContext);
