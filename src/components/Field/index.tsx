import { ChangeEvent, InputHTMLAttributes, useCallback, useState } from "react"
import classNames from 'classnames';
import { RiArrowDownSLine } from "react-icons/ri";
import { v4 as uuidV4 } from 'uuid';
import { UseFormRegisterReturn } from "react-hook-form";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  placeholder?: string;
  name: string;
  register: UseFormRegisterReturn;
}

function Text({ id, name, label, placeholder = " ", register, ...rest }: FieldProps) {
  return (
    <div className="relative w-full">
      <input
        className={classNames(
          "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm",
          "text-gray-900 bg-gray-50 dark:bg-gray-700 border-0",
          "border-b-2 border-gray-300 appearance-none dark:text-white",
          "dark:border-gray-600 dark:focus:border-cyan-800",
          " focus:outline-none focus:ring-0 focus:border-cyan-800 peer"
        )}
        // ref={ref}
        placeholder={placeholder}
        {...register}
        {...rest}
      />
      <label htmlFor={id}
        className={classNames(
          "absolute text-sm text-gray-500 dark:text-gray-400",
          "duration-300 transform -translate-y-4 scale-75 top-4 z-10",
          "origin-[0] start-2.5 peer-focus:text-cyan-800",
          "peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100",
          "peer-placeholder-shown:translate-y-0 peer-focus:scale-75",
          "peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4",
          "rtl:peer-focus:left-auto"
        )}>{label}</label>
    </div>

  );
}


function Number({ id, name, label, placeholder = " ", register, ...rest }: FieldProps) {
  return (
    <div className="relative w-full">
      <input
        type="number"
        id={id}
        className={classNames(
          "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm",
          "text-gray-900 bg-gray-50 dark:bg-gray-700 border-0",
          "border-b-2 border-gray-300 appearance-none dark:text-white",
          "dark:border-gray-600 dark:focus:border-cyan-800",
          " focus:outline-none focus:ring-0 focus:border-cyan-800 peer"
        )}
        placeholder={placeholder}
        {...register}
        {...rest}
      />
      <label htmlFor={id}
        className={classNames(
          "absolute text-sm text-gray-500 dark:text-gray-400",
          "duration-300 transform -translate-y-4 scale-75 top-4 z-10",
          "origin-[0] start-2.5 peer-focus:text-cyan-800",
          "peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100",
          "peer-placeholder-shown:translate-y-0 peer-focus:scale-75",
          "peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4",
          "rtl:peer-focus:left-auto"
        )}>{label}</label>
    </div>
  )
}

function Date({ id, name, label, placeholder = " ", register, ...rest }: FieldProps) {
  return (
    <div className="relative w-full">
      <input
        type="date"
        id={id}
        className={classNames(
          "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm",
          "text-gray-900 bg-gray-50 dark:bg-gray-700 border-0",
          "border-b-2 border-gray-300 appearance-none dark:text-white",
          "dark:border-gray-600 dark:focus:border-cyan-800",
          " focus:outline-none focus:ring-0 focus:border-cyan-800 peer"
        )}
        placeholder={placeholder}
        {...register}
        {...rest}
      />
      <label htmlFor={id}
        className={classNames(
          "absolute text-sm text-gray-500 dark:text-gray-400",
          "duration-300 transform -translate-y-4 scale-75 top-4 z-10",
          "origin-[0] start-2.5 peer-focus:text-cyan-800",
          "peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100",
          "peer-placeholder-shown:translate-y-0 peer-focus:scale-75",
          "peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4",
          "rtl:peer-focus:left-auto"
        )}>{label}</label>
    </div>
  )
}

function Checkbox({ id, name, label, placeholder = " ", register, ...rest }: FieldProps) {
  return (
    <div className="inline-flex items-center">
      <label className="relative flex items-center p-3 rounded-full cursor-pointer"
        htmlFor={id}>
        <input type="checkbox"
          id={id}
          {...rest}
          {...register}
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
            stroke="currentColor" strokeWidth="1">
            <path fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"></path>
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



type SelectProps = FieldProps & {
  options: { label: string, value: string }[]
}

function Select({ id = uuidV4(), name, label, onChange, options, ...rest }: SelectProps) {
  const [focused, setFocused] = useState<boolean>(false);
  const [hasValue, setHasValue] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<{ label: string, value: string }[]>(options);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setTimeout(() => {
      setFocused(false);
    }, 100);
  }, []);

  const handleChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const currentValue = ev.target.value;
    setInputValue(currentValue);
    setHasValue(currentValue.length > 0);

    if (onChange) {
      onChange(ev);
    }

    const filter = options.filter(option => option.label.toLowerCase().includes(currentValue.toLowerCase()));
    setFilteredOptions(filter);
    setFocused(true);
  }, [onChange, options]);

  const handleClickIcon = useCallback(() => {
    setFocused(prevFocused => !prevFocused);
  }, []);

  const handleOptionClick = useCallback((label: string, value: string) => {
    setInputValue(label);
    setHasValue(true);
    setFocused(false);

    if (onChange) {
      onChange({ value: value, label: label, id: id, name: name } as any);
    }
  }, [onChange, name]);

  return (
    <div className="flex flex-col w-full relative">
      <label htmlFor={id} className={classNames('absolute left-2 transition-all', {
        'top-[-6px] text-xs text-cyan-800 px-1 bg-white': focused || hasValue,
        'top-3 text-sm text-gray-500 px-2': !focused && !hasValue,
      })}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        
        name={name}
        className="pl-4 px-2 py-2 border rounded pr-8 focus:outline-none focus:border-cyan-800 text-gray-800"
        {...rest}
      />
      {focused && (
        <div className="block">
          <ul className="absolute mt-1 z-10 w-full bg-white border rounded shadow-md">
            {filteredOptions.map(({ label, value }) => (
              <li
                key={value}
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => handleOptionClick(label, value)}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}
      <RiArrowDownSLine
        className={classNames(
          "absolute top-1/2 right-2 transform -translate-y-1/2 h-full cursor-pointer transition-transform",
          { "rotate-180": focused, "rotate-0": !focused }
        )}
        onClick={handleClickIcon}
      />
    </div>
  );
}


export const Field = {
  Text,
  Number,
  Date,
  Checkbox,
  Select
};