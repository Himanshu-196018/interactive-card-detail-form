const Input = ({ name, ph, type, max, value, handleChange, error }) => {
  return (
    <label htmlFor={name}>
      {name.replace("-", " ").toUpperCase() + " "}
      <input
        type={type}
        name={name}
        placeholder={ph}
        value={value}
        onChange={handleChange}
        className={error.haveError ? ".error" : ""}
      />
      <p>{error.errorText}</p>
    </label>
  );
};

export default Input;
