import Image from 'next/image'
import Link from 'next/link'

import InstagramIcon from '../assets/icons/instagram.svg'

const instagramLink = 'https://www.instagram.com/dosybi/'

const content = {
  title: 'Кто сделал',
  text: [
    'Привет! Меня зовут Антон. Я живу в Алматы, работаю фронтенд-разработчиком, и иногда в своободное время делаю калькуляторы — в основном, для себя, потому что они удобнее и симпатичнее чем скучные таблички в Икселе.',
    'Если заметили ошибку в рассчётах, хотите что-то спросить, покритиковать или предложить идею для следующего калькулятора, напишите мне в Инстаграм.',
  ],
}

const Author = () => {
  return (
    <div className="mb-10">
      <div className="mb-0.5 text-xl font-bold lg:mt-4 lg:text-xl">
        {content.title}
      </div>
      {content.text.map((paragraph) => {
        return (
          <p className="mb-2 max-w-2xl" key={paragraph}>
            {paragraph}
          </p>
        )
      })}
      <div className="mb-2 flex h-12 w-12 justify-center rounded-lg bg-gradient-to-r from-violet-200 to-pink-200 p-1.5">
        <Link href={instagramLink}>
          <Image src={InstagramIcon} width={40} height={40} alt="Инстаграм" />
        </Link>
      </div>
    </div>
  )
}

export default Author
