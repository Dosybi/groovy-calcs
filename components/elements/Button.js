import Link from 'next/link'
import classNames from 'classnames'

const Button = ({ link, label, color, handleClick, isAdditional = false }) => {
  if (isAdditional) {
    return (
      <button
        className="mb-2 text-blue-600 hover:text-blue-800"
        onClick={handleClick}
      >
        {label}
      </button>
    )
  }

  return (
    <Link href={link}>
      <button
        className={classNames(
          'rounded-md border-2 border-gray-600 bg-white px-4 py-2 text-sm font-bold transition hover:border-gray-100',
          `${color}-button`
        )}
      >
        {label}
      </button>
    </Link>
  )
}

export default Button
