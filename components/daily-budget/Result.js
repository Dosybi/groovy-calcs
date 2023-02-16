const Result = ({ totalIncom, totalExpenses, savings }) => {
  const dailyBudget = String(Math.round((totalIncom - totalExpenses) / 30))
    .split('')
    .map((letter, i, arr) => (i === arr.length - 4 ? letter + ' ' : letter))
    .map((letter, i, arr) => (i === arr.length - 7 ? letter + ' ' : letter))
    .join('')

  return (
    totalIncom && (
      <div className="sticky bottom-0 mb-8 rounded-lg bg-teal-900 p-4 text-white">
        <div className="">Бюджет на день</div>
        <div className="mb-1 text-4xl font-bold">{dailyBudget} ₸</div>
        {savings ? <div>За год накопите {savings * 12} ₸</div> : <></>}
      </div>
    )
  )
}

export default Result
