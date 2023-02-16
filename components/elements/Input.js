const Input = ({ label, placeholder, period, handleInputChange }) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="number"
        pattern="[0-9]*"
        inputMode="numeric"
        className="h-12 w-full rounded-md py-2 px-4 outline-none first-of-type:mb-4 focus:outline-none"
        placeholder={placeholder}
        period={period}
        onChange={handleInputChange}
      ></input>
    </>
  )
}

export default Input
