import React, {useId} from 'react'

function Select({options, label, className, ...props}, ref) {
    const id = useId()
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        </label>
      )}
      <select id={id} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} {...props} ref={ref}>
        {options?.map((option) => (
          <option key={option} value={value}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
