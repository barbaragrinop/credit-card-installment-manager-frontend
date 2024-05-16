import { ChangeEvent, InputHTMLAttributes, useCallback, useState } from "react"
import classNames from 'classnames';
import DatePicker from "react-date-picker";

export type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  name: string
  label: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Text({ id, name, label, onChange, ...rest }: FieldProps) {
  const [focused, setFocused] = useState<boolean>(false)
  const [hasValue, setHasValue] = useState<boolean>(false);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, [])

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, [])

  const handleChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const currentValue = ev.target.value;
    setHasValue(currentValue.length > 0);

    if (onChange) {
      onChange(ev);
    }
  }, [])

  return (
    <div className="flex flex-col w-full relative">
      <label htmlFor={id} className={classNames('absolute left-2 transition-all', {
        'top-[-6px] text-xs text-cyan-800 px-1 bg-white': focused || hasValue,
        'top-3 text-sm text-gray-500 px-2': !focused,
      })}>
        {label}
      </label>
      <input type="text"
        id={id}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        name={name}
        className="pl-4 px-2 py-2 border rounded focus:outline-none focus:border-cyan-800 text-gray-800"
        {...rest}
      />
    </div>
  )
}

function Number({ id, name, label, onChange, ...rest }: FieldProps) {
  const [focused, setFocused] = useState<boolean>(false)
  const [hasValue, setHasValue] = useState<boolean>(false);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, [])

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, [])

  const handleChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const currentValue = ev.target.value;
    setHasValue(currentValue.length > 0);

    if (onChange) {
      onChange(ev);
    }
  }, [])

  return (
    <div className="flex flex-col w-full relative">
      <label htmlFor={id} className={classNames('absolute left-2 transition-all', {
        'top-[-6px] text-xs text-cyan-800 px-1 bg-white': focused || hasValue,
        'top-3 text-sm text-gray-500 px-2': !focused,
      })}>
        {label}
      </label>
      <input type="text"
        id={id}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        name={name}
        className="pl-4 px-2 py-2 border rounded focus:outline-none focus:border-cyan-800 text-gray-800"
        {...rest}
      />
    </div>
  )
}

function Date({ id, name, label, onChange, ...rest }: FieldProps) {


  return (
    <div className="flex flex-col w-full relative">
      <label htmlFor={id} className="absolute left-2 transition-all top-[-6px] text-xs text-cyan-800 px-1 bg-white">
        {label}
      </label>
      <input type="date"
        id={id}
        name={name}
        className="pl-4 px-2 py-2 border rounded focus:outline-none focus:border-cyan-800 text-gray-800"
        {...rest}
      />
    </div>
  )
}
function Checkbox({ id,  name, label, ...rest }: FieldProps) {
  return (
    <div className="inline-flex items-center">
      <label className="relative flex items-center p-3 rounded-full cursor-pointer" 
        htmlFor={id}>
        <input type="checkbox"
          id={id}
          name={name} 
          {...rest}
          className="before:content[''] peer relative h-4 w-4 
            cursor-pointer appearance-none rounded-md 
            border 
            transition-all 
            checked:border-cyan-800 checked:bg-cyan-800 checked:before:bg-cyan-800 
            before:absolute 
            before:top-2/4 
            before:left-2/4 
            before:block 
            before:h-12 
            before:w-12 
            before:-translate-y-2/4 
            before:-translate-x-2/4 
            before:rounded-full 
            before:bg-blue-gray-500 
            before:opacity-0 
            before:transition-opacity"
          />
        <span
          className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"
            stroke="currentColor" stroke-width="1">
            <path fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </span>
      </label>
      {label && (
        <label className="mt-px font-light text-gray-800 cursor-pointer " htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  )
}



export const Field = {
  Text,
  Number,
  Date,
  Checkbox
};