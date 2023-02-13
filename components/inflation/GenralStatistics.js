import { generalStatistics } from '../../data/inflation'

const GeneralStatistics = ({ previousSalary, currentSalary }) => {
  const raise = (
    ((currentSalary - previousSalary) / previousSalary) *
    100
  ).toFixed(2)

  return (
    <div className="mb-8">
      <div className="mb-2 text-xl font-bold">
        <div>{generalStatistics.title}</div>
        <div className="text-green-500">
          на {raise}%,{' '}
          <span className="text-black">{generalStatistics.text}</span>
        </div>
      </div>
      <div>{generalStatistics.paragraph}</div>
    </div>
  )
}

export default GeneralStatistics
