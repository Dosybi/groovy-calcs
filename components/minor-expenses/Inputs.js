import { HiOutlineTrash } from 'react-icons/hi'
import { HiChevronDown } from 'react-icons/hi'

const Inputs = ({
  expense,
  handlePriceChange,
  handleAmountChange,
  handleDeleteProduct,
}) => {
  return (
    <div className="mb-4 flex items-center">
      <div className="w-full">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          {expense.product}
        </label>
        <div className="relative mt-1 rounded-md border p-1.5 shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">₸</span>
          </div>
          <input
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            name="price"
            id="price"
            className="block w-full appearance-none rounded-md  border-gray-300 pl-7 pr-12 sm:text-sm"
            placeholder={expense.price}
            onChange={(e) => handlePriceChange(expense.product, e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <select
              id="amount"
              name="amount"
              onChange={(e) =>
                handleAmountChange(expense.product, e.target.value)
              }
              className="h-full appearance-none rounded-md border-transparent bg-transparent py-0 pl-2 text-gray-500 outline-none"
            >
              {[...Array(7).keys()].map((amount) => {
                return (
                  <option key={amount} value={amount + 1}>
                    {amount + 1 === 7
                      ? 'Каждый день'
                      : amount + 1 === 2 || amount + 1 === 3 || amount + 1 === 4
                      ? `${amount + 1} раза в неделю`
                      : `${amount + 1} раз в неделю`}
                  </option>
                )
              })}
            </select>
            <HiChevronDown className="mr-4" />
          </div>
        </div>
      </div>
      {expense.isCustom ? (
        <HiOutlineTrash
          className="mt-6 ml-4 cursor-pointer text-3xl text-gray-400"
          onClick={() => handleDeleteProduct(expense.product)}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default Inputs
