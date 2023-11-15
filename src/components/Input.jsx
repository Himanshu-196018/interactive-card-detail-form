const Input = ({ name, ph, type, max, value }) => {
  return (
    <label htmlFor={name}>
      {name.replace("-", " ").toUpperCase() + " "}
      <input type={type} name={name} placeholder={ph} value={value} />
    </label>
  );
};

export default Input;
