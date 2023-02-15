import Image from 'next/image'
import Link from 'next/link'
import { calcs } from '../data'

const MoreSection = () => {
  return (
    <>
      <div className="scrollbar-none -mx-4 mb-8 overflow-auto bg-blue-50 p-6 md:mx-0 md:rounded-xl">
        <div className="sticky left-0 mb-4 font-bold">Что ещё посчитать</div>
        <ul className="flex">
          {calcs.map((calc) => {
            return (
              <li
                className="mr-12 w-40 transform hover:text-red-500"
                key={calc.name}
              >
                <Link href={calc.link}>
                  <Image
                    className="mb-2"
                    src={calc.icon}
                    alt={calc.name}
                    width={40}
                  />
                  <div className="text-sm leading-tight">{calc.shortName}</div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default MoreSection
