import classNames from 'classnames'

const Description = ({ content, isInner }) => {
  return (
    <div className="mt-2 mb-8">
      <h1
        className={classNames(
          'mb-2 font-bold',
          isInner ? 'text-2xl' : 'text-4xl'
        )}
      >
        {content.title}
      </h1>
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
