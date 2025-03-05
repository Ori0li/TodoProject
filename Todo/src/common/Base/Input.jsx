const Input = ({ onChange, value }) => {
  return (
    <>
      <input type="text" value={value} onChange={onChange}></input>
    </>
  );
};

export default Input;
