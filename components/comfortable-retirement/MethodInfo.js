import { useState } from 'react'

const MethodInfo = ({ info }) => {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <div className="mb-8">
      <div
        className="mb-2 cursor-pointer text-blue-500 underline decoration-dashed decoration-1 underline-offset-2 hover:text-blue-800 hover:decoration-blue-800"
        onClick={() => setIsToggled(!isToggled)}
      >
        {info.title}
      </div>
      <div className={`${!isToggled ? 'hidden' : 'block'}`}>
        {info.text.map((paragraph) => {
          return (
            <p className="mb-3 last-of-type:mb-8" key={paragraph}>
              {paragraph}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default MethodInfo
