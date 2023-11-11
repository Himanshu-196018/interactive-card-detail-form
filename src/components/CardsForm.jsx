import Input from "./Input";
import DateInput from "./DateInput";
import Button from "./Button";

const CardsForm = () => {
  return (
    <form>
      <Input
        name={"cardholder-name"}
        ph={"e.g. Jane Appleseed"}
        type={"text"}
      />
      <Input
        name={"card-number"}
        ph={"e.g. 1234 5678 9123 0000"}
        type={"number"}
      />
      <div className="double">
        <DateInput
          name={"exp. date (MM/YY)"}
          ph={["MM", "YY"]}
          type={"number"}
        />
        <Input name={"cvc"} ph={"e.g. 123"} max={3} type={"number"} />
      </div>
      <Button text={"Confirm"} />
    </form>
  );
};

export default CardsForm;
