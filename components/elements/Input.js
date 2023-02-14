const Input = ({ placeholder, period, handleInputChange }) => {
  return (
    <input
      type="number"
      pattern="[0-9]*"
      inputMode="numeric"
      className="h-12 w-full rounded-md py-2 px-4 outline-none first-of-type:mb-4 focus:outline-none"
      placeholder={placeholder}
      period={period}
      onChange={handleInputChange}
    ></input>
  )
}

export default Input
