import Link from 'next/link'

const Button = ({ link, label, color, handleClick, isAdditional = false }) => {
  const className = isAdditional
    ? 'mb-2 text-blue-600 hover:text-blue-800'
    : `rounded-md border-2 border-gray-600 bg-white px-4 py-2 text-sm font-bold transition hover:border-gray-100 ${color}-button`

  return handleClick ? (
    <button className={className} onClick={handleClick}>
      {label}
    </button>
  ) : (
    <Link href={link} passHref>
      <button className={className}>{label}</button>
    </Link>
  )
}

export default Button
