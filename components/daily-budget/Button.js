const Button = ({ label, handleClick }) => {
  return (
    <button
      className="mb-2 mt-4 text-blue-600 hover:text-blue-800"
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default Button
