import Button from "./Button";
import { useStateContext } from "../contexts/ContextProvider";

const Completed = () => {
  const { handleContinue } = useStateContext();
  return (
    <div className="section2">
      <div className="completed-container">
        <img src="/images/icon-complete.svg" alt="completed icon" />
        <h1>THANK YOU!</h1>
        <p>We&apos;he added your card details</p>
        <Button text={"Continue"} handleClick={handleContinue} />
      </div>
    </div>
  );
};

export default Completed;
