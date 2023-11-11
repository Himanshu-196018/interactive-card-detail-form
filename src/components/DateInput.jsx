const DateInput = ({ name, ph, type }) => {
  return (
    <label htmlFor={name.slice(0, 3)}>
      {name.toUpperCase()}
      <input name={name.slice(0, 3)} type={type} placeholder={ph[0]} />
      <input name={name.slice(0, 3)} type={type} placeholder={ph[1]} />
    </label>
  );
};

export default DateInput;
