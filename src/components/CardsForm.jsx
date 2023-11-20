import Input from "./Input";
import DateInput from "./DateInput";
import Button from "./Button";
import { useStateContext } from "../contexts/ContextProvider";

const CardsForm = () => {
  const {
    cardDetails,
    handleNameChange,
    handleCardNumber,
    handleCvc,
    handleSubmit,
    error,
  } = useStateContext();

  return (
    <div className="section2">
      <form>
        <Input
          name={"cardholder-name"}
          ph={"e.g. Jane Appleseed"}
          type={"text"}
          error={error.cardholderName}
          value={cardDetails.cardholderName}
          handleChange={handleNameChange}
        />
        <Input
          name={"card-number"}
          ph={"e.g. 1234 5678 9123 0000"}
          type={"text"}
          error={error.cardNumber}
          value={cardDetails.cardNumber}
          handleChange={handleCardNumber}
        />
        <div className="double">
          <DateInput
            name={"exp. date (MM/YY)"}
            ph={["MM", "YY"]}
            type={"number"}
            value={cardDetails.expDate}
          />
          <Input
            name={"cvc"}
            ph={"e.g. 123"}
            max={999}
            type={"number"}
            error={error.cvc}
            value={cardDetails.cvc}
            handleChange={handleCvc}
          />
        </div>
        <Button text={"Confirm"} handleClick={handleSubmit} />
      </form>
    </div>
  );
};

export default CardsForm;
