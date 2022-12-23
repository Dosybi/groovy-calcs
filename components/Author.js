const content = {
  title: 'Кто сделал',
  text: [
    'Привет! Меня зовут Антон Досыбиев. Я живу в Алматы, работаю фронтенд-разработчиком, а в своободное время делаю калькуляторы — в основном, для себя, потому что они удобнее и красивее чем скучные таблички в Икселе.',
    'Если вы заметили ошибку в рассчётах или хотите предложить идею для следующего калькулятора, напишите мне в Инстаграм.',
    'Если хотите поделиться страницей, вот варианты:',
  ],
}

const Author = () => {
  return (
    <div className="mb-8">
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
    </div>
  )
}

export default Author
