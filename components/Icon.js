import Image from 'next/image'

const Icon = ({ icon, alt, color }) => {
  return (
    <div className={`mr-8 rounded-3xl p-6 ${color} w-40`}>
      <Image src={icon} width={100} height={100} alt={alt}></Image>
    </div>
  )
}

export default Icon
