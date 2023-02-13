import Image from 'next/image'
import classNames from 'classnames'

const Icon = ({ icon, alt, color }) => {
  return (
    <div
      className={classNames(
        'mr-8 flex h-40 w-40 justify-center rounded-3xl p-6',
        color
      )}
    >
      <Image src={icon} width={100} height={100} alt={alt}></Image>
    </div>
  )
}

export default Icon
