const content = {
  title: 'Калькуляторы для тех, кто не любит Иксель',
  text: [
    'Например, они помогут посчитать, как дожить до зарплаты, сколько вы тратите пока зарабатываете, как накопить на комфортную старость, сколько денег съедают ежедневные приятные мелочи — и сколько вы могли бы накопить, отказавшись от них.',
  ],
}

const Description = () => {
  return (
    <div className="mt-2 mb-8">
      <h1 className="mb-2 text-4xl font-bold">{content.title}</h1>
      {content.text.map((paragraph) => {
        return (
          <p className="max-w-2xl first-of-type:mb-2" key={paragraph}>
            {paragraph}
          </p>
        )
      })}
    </div>
  )
}

export default Description
