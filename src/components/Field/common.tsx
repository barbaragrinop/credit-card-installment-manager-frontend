import classNames from 'classnames';

import { InputHTMLAttributes, useState } from "react"
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, Label, Transition, Field as FieldHeadless, ComboboxButton } from '@headlessui/react'
import { v4 as uuidV4 } from 'uuid';
import { BiCheck } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { SelectProp } from "@/types/select";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    placeholder?: string;
    name: string
}

function Text({ id, name, label, placeholder = " ", ...rest }: FieldProps) {



    return (
        <div>
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

        </div>

    );
}


function Number({ id, name, label, placeholder = " ", ...rest }: FieldProps) {



    return (
        <>
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

        </>
    )
}

function Date({ id, name, label, placeholder = " ", ...rest }: FieldProps) {


    return (
        <div>
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

        </div>
    )
}

function Checkbox({ id, name, label, placeholder = " ", ...rest }: FieldProps) {

    // const { formState: { errors } } = useController({
    //   name,
    //   control
    // })

    // 
    return (
        <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor={id}>
                <input type="checkbox"
                    id={id}
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
    options: SelectProp[];
    onChange?: (option: { value: number; label: string; id: string; name: string }) => void;
};

function Select({ id = uuidV4(), name, label, onChange, options, placeholder, ...rest }: SelectProps) {
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState<SelectProp>({
        value: 0,
        label: '',
    })



    const filteredOptions =
        query === ''
            ? options
            : options.filter((opt) => {
                return opt.label.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <FieldHeadless className="w-full relative">
            <Label
                className={classNames(
                    "absolute text-sm text-gray-500 dark:text-gray-400",
                    "duration-300 transform -translate-y-4 scale-75 top-4 z-10",
                    "origin-[0] start-2.5 peer-focus:text-cyan-800",
                    "peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100",
                    "peer-placeholder-shown:translate-y-0 peer-focus:scale-75",
                    "peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4",
                    "rtl:peer-focus:left-auto")}
            >{label}</Label>
            <Combobox value={selected} onChange={(value: any) => {

                setSelected(value)
            }}>
                <div className="relative">
                    <ComboboxInput
                        className={classNames(
                            "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm",
                            "text-gray-900 bg-gray-50 dark:bg-gray-700 border-0",
                            "border-b-2 border-gray-300 appearance-none dark:text-white",
                            "dark:border-gray-600 dark:focus:border-cyan-800",
                            "focus:outline-none focus:ring-0 focus:border-cyan-800 peer"
                        )}
                        displayValue={(person: any) => person?.label}
                        onChange={(event) => {
                            if (event && onChange) {
                                onChange({ value: selected?.value, label: label, id: id, name: name });
                            }
                            setQuery(event.target.value)
                        }}
                        {...rest}
                    />
                    <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5 transition-all">
                        <IoIosArrowDown className="size-4 " />
                    </ComboboxButton>
                </div>
                <Transition
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <ComboboxOptions
                        anchor="bottom" className="mt-1 z-10  bg-white rounded shadow-md "
                    >
                        {filteredOptions.map((opt) => (
                            <ComboboxOption
                                key={opt.value}
                                value={opt}
                                className="group py-2 px-4 hover:bg-cyan-800/25 cursor-pointer w-[var(--input-width)] flex items-center gap-3"
                            >
                                <BiCheck className="invisible size-4 group-data-[selected]:visible text-lime-950" />
                                <span className="text-gray-800">{opt.label}</span>
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Transition>
            </Combobox>
        </FieldHeadless>
    )
}



export const CommonField = {
    Text,
    Number,
    Date,
    Checkbox,
    Select,
};