import Button from './Button'
import SingleInput from './SingleInput'

const InputsGroup = ({
  title,
  description,
  categories,
  handleInputChange,
  handleFrequencyChange,
  handleAddCategory,
  handleDeleteCategory,
}) => {
  return (
    <div className="mb-6 rounded-xl bg-gray-100 p-4">
      <div className="mb-1 text-xl font-bold">{title}</div>
      <div className="mb-2">{description}</div>
      {categories.map((category) => {
        return (
          <SingleInput
            category={category}
            key={category.name}
            hasDropdown={title === 'Расходы' ? true : false}
            handleInputChange={handleInputChange}
            handleFrequencyChange={handleFrequencyChange}
            handleDeleteCategory={handleDeleteCategory}
          />
        )
      })}
      <Button label="+ Добавить" handleClick={() => handleAddCategory(title)} />
    </div>
  )
}

export default InputsGroup
