import Input from './elements/Input'

const InputsGroup = ({ inputs, onInputChange }) => {
  const handleInputChange = (e) => {
    onInputChange(e)
  }
  return (
    <div className="-mx-4 mb-8 rounded-none bg-gray-100 p-6 md:mx-0 md:rounded-xl">
      <h2 className="mb-3 text-xl font-bold">{inputs.title}</h2>
      {inputs.fields.map((input) => (
        <div key={input.year}>
          <label className="block text-sm font-medium text-gray-700">
            В {input.year} году
          </label>
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
