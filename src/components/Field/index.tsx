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

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
type FieldDateProps = FieldProps & {
  onChange: (date: Value) => void
}

function Date ({ id, name, label,  onChange }: FieldDateProps)  {
  const [focused, setFocused] = useState<boolean>(false);
  const [hasValue, setHasValue] = useState<boolean>(false);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);

  const handleDateChange = useCallback((date: Value) => {
  
    if (date) {
      setHasValue(true);
      onChange(date); // Notificar mudanças de data ao componente pai
    }
  }, [onChange]);

  return (
    <div className="flex flex-col w-full relative">
      <label htmlFor={id} className={classNames('absolute left-2 transition-all', {
        'top-[-6px] text-xs text-cyan-800 px-1 bg-white': focused || hasValue,
        'top-3 text-sm text-gray-500 px-2': !focused,
      })}>
        {label}
      </label>
      <DatePicker
        id={id}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleDateChange} // Passar a função para lidar com alterações de data
        className="pl-4 px-2 py-2 border rounded focus:outline-none focus:border-cyan-800 text-gray-800"
      />
    </div>
  );
};
    
function Checkbox({ ...rest }: FieldProps) {
  return (
    <input type="checkbox" {...rest} />
  )
}

export const Field = {
  Text,
  Number,
  Date,
  Checkbox
};