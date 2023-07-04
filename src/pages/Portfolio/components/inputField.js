const InputField = (props) => {
  const handleChange = (e) => {
    props.OnChange(e.target.value);
  };

  if (props.message) {
    return (
      <div className="py-4 w-full">
        <textarea
          rows="1"
          className="border-0 pb-4 bg-transparent border-b border-[#B1B1B1] w-full placeholder-white focus:outline-none"
          placeholder={props.label}
          onChange={handleChange}
          value={props.value}
        ></textarea>
      </div>
    );
  }
  return (
    <div className="py-4 w-full">
      <input
        type={props.type}
        onChange={handleChange}
        className="border-0 pb-4 bg-transparent border-b border-[#B1B1B1] w-full placeholder-white focus:outline-none"
        placeholder={props.label}
        value={props.value}
      ></input>
    </div>
  );
};
export default InputField;
