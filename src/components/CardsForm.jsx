import Input from "./Input";
import DateInput from "./DateInput";
import Button from "./Button";
import { useStateContext } from "../contexts/ContextProvider";

const CardsForm = () => {
  const { cardDetails, handleNameChange, handleCardNumber, handleCvc } =
    useStateContext();

  return (
    <div className="section2">
      <form>
        <Input
          name={"cardholder-name"}
          ph={"e.g. Jane Appleseed"}
          type={"text"}
          value={cardDetails.cardholderName}
          handleChange={handleNameChange}
        />
        <Input
          name={"card-number"}
          ph={"e.g. 1234 5678 9123 0000"}
          type={"number"}
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
            value={cardDetails.cvc}
            handleChange={handleCvc}
          />
        </div>
        <Button text={"Confirm"} />
      </form>
    </div>
  );
};

export default CardsForm;
