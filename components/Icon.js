import Image from 'next/image'

const Icon = ({ icon, alt, color }) => {
  return (
    <div
      className={`mr-8 rounded-3xl p-6 ${color} flex h-40 w-40 justify-center`}
    >
      <Image src={icon} width={100} height={100} alt={alt}></Image>
    </div>
  )
}

export default Icon
