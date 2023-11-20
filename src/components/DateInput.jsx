import { useStateContext } from "../contexts/ContextProvider";

const DateInput = ({ name, ph, type }) => {
  const { error } = useStateContext();

  return (
    <label htmlFor={name.slice(0, 3)}>
      {name.toUpperCase()}
      <div className="flex-container">
        <input
          name={name.slice(0, 3)}
          type={type}
          placeholder={ph[0]}
          className={error.expDate.haveError1 ? ".error" : ""}
        />
        <input
          name={name.slice(0, 3)}
          type={type}
          placeholder={ph[1]}
          className={error.expDate.haveError2 ? ".error" : ""}
        />
      </div>
      <p>{error.expDate.errorText}</p>
    </label>
  );
};

export default DateInput;
