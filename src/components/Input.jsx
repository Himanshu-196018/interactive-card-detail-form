const Input = ({ name, ph, type, max }) => {
  return (
    <label htmlFor={name}>
      {name.replace("-", " ").toUpperCase() + " "}
      <input type={type} name={name} placeholder={ph} />
    </label>
  );
};

export default Input;
