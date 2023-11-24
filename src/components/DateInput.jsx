import { useStateContext } from "../contexts/ContextProvider";

const DateInput = ({ name, ph, type }) => {
  const { cardDetails, error, handleMonthChange, handleYearChange } =
    useStateContext();

  return (
    <label htmlFor={name.slice(0, 3)}>
      {name.toUpperCase()}
      <div className="flex-container">
        <input
          name={name.slice(0, 3)}
          type={type}
          placeholder={ph[0]}
          className={error.expDate.haveError1 ? "error" : ""}
          value={cardDetails.expDate[0]}
          onChange={handleMonthChange}
        />
        <input
          name={name.slice(0, 3)}
          type={type}
          placeholder={ph[1]}
          className={error.expDate.haveError2 ? "error" : ""}
          value={cardDetails.expDate[1]}
          onChange={handleYearChange}
        />
      </div>
      <p>{error.expDate.errorText}</p>
    </label>
  );
};

export default DateInput;
