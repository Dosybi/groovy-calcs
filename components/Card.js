import Link from 'next/link'

import Button from './elements/Button'
import Icon from './elements/Icon'

const Card = ({ name, description, link, icon, color }) => {
  return (
    <div className="mb-8 rounded-xl bg-gray-100 px-5 pt-6 pb-6 lg:mr-8 lg:flex lg:h-auto lg:w-[45%] lg:flex-col">
      <div className="mb-4 flex lg:flex-col">
        <Link href={link}>
          <Icon icon={icon} alt={name} color={color} />
        </Link>
      </div>
      <div className="mb-2 text-2xl font-bold lg:mt-4 lg:text-xl">{name}</div>
      <div className="mb-4">{description}</div>
      <div className="mt-auto">
        <Button link={link} label="Открыть" color={color} />
      </div>
    </div>
  )
}

export default Card
