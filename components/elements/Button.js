import Link from 'next/link'
import classNames from 'classnames'

const Button = ({ link, label, color }) => {
  return (
    <Link href={link}>
      <button
        className={classNames(
          'rounded-md border-2 border-gray-600 bg-white px-4 py-2 text-sm font-bold transition hover:border-gray-100',
          `${color}-button`
        )}
        href={link}
      >
        {label}
      </button>
    </Link>
  )
}

export default Button
