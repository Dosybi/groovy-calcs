import Link from 'next/link'

import Button from './Button'
import Icon from './Icon'

const Card = ({ name, description, link, icon, color }) => {
  return (
    <div className="mb-8 rounded-xl bg-gray-100 px-5 pt-5 pb-6 lg:mr-8 lg:flex lg:h-auto lg:w-[45%] lg:flex-col">
      <div className="mb-4 flex lg:flex-col">
        <Link href={link}>
          <Icon icon={icon} alt={name} color={color} />
        </Link>
        <div className="text-2xl font-bold lg:mt-4 lg:text-xl">{name}</div>
      </div>
      <div className="mb-4">{description}</div>
      <div className="">
        <Button link={link} label="Открыть" color={color} />
      </div>
    </div>
  )
}

export default Card
