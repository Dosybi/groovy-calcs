import Link from 'next/link'

import { BsArrowLeft } from 'react-icons/bs'

const Navigation = () => {
  return (
    <div className="mb-4 bg-white py-2">
      <ul>
        <Link href={'/'}>
          <li className="flex w-fit items-center gap-2 rounded-xl border border-blue-400 px-2 text-sm transition hover:bg-blue-400 hover:text-white">
            <BsArrowLeft />
            <div>Все калькуляторы</div>
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Navigation
