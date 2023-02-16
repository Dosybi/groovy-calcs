import { HiOutlineTrash } from 'react-icons/hi'

const SingleInput = ({
  category,
  hasDropdown,
  handleInputChange,
  handleFrequencyChange,
  handleDeleteCategory,
}) => {
  return (
    <div
      className="relative mt-4 flex items-center justify-between"
      key={category.name}
    >
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700">
          {category.name}
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">₸</span>
          </div>
          <input
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            className="block h-10 w-full appearance-none rounded-md border-gray-300 pl-7 pr-12"
            placeholder={category.amount}
            onChange={(e) => handleInputChange(e.target.value, category.name)}
          />
          {hasDropdown && (
            <div className="absolute inset-y-0 right-0 flex items-center">
              <select
                className="mr-4 h-full rounded-md border-transparent bg-transparent text-gray-500"
                onChange={(e) =>
                  handleFrequencyChange(e.target.value, category.name)
                }
              >
                <option value="monthly">в месяц</option>
                <option value="weekly">в неделю</option>
                <option value="daily">в день</option>
                <option value="yearly">в год</option>
              </select>
            </div>
          )}
        </div>
      </div>
      <HiOutlineTrash
        className="mt-6 ml-3 cursor-pointer text-3xl text-gray-400 hover:text-gray-600"
        onClick={() => handleDeleteCategory(category.name)}
      />
    </div>
  )
}

export default SingleInput
