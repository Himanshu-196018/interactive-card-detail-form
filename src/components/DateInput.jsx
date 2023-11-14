const DateInput = ({ name, ph, type }) => {
  return (
    <label htmlFor={name.slice(0, 3)}>
      {name.toUpperCase()}
      <div className="flex-container">
        <input name={name.slice(0, 3)} type={type} placeholder={ph[0]} />
        <input name={name.slice(0, 3)} type={type} placeholder={ph[1]} />
      </div>
    </label>
  );
};

export default DateInput;
