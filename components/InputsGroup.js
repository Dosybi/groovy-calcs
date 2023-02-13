import Input from './elements/Input'

const InputsGroup = ({ inputs, onInputChange }) => {
  const handleInputChange = (e) => {
    onInputChange(e)
  }
  return (
    <div className="-mx-8 mb-8 rounded-none bg-gray-100 p-6 md:mx-0 md:rounded-xl">
      <h2 className="mb-3 text-xl font-bold">{inputs.title}</h2>
      {inputs.fields.map((input) => (
        <div key={input.year}>
          <div className="mb-1 text-gray-500">В {input.year} году</div>
          <Input
            placeholder={input.placeholder}
            period={input.type}
            handleInputChange={handleInputChange}
          />
        </div>
      ))}
    </div>
  )
}

export default InputsGroup
