const Button = ({ link, label, color }) => {
  return (
    <button
      className={`rounded-md border-2 border-gray-600 bg-white px-4 py-2 text-sm font-bold transition hover:border-gray-100 hover:bg-gradient-to-r ${
        color.split(' ')[1]
      } ${color.split(' ')[2]}`}
      href={link}
    >
      {label}
    </button>
  )
}

export default Button
