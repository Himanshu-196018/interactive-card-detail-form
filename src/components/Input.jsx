const Input = ({ name, ph, type, max, value, handleChange }) => {
  return (
    <label htmlFor={name}>
      {name.replace("-", " ").toUpperCase() + " "}
      <input
        type={type}
        name={name}
        placeholder={ph}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default Input;
