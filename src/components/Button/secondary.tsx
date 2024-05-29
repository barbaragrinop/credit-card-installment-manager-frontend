import { ButtonProps } from "@/types/button";

export function Secondary({ children, type, ...rest }: ButtonProps) {
    return (
        <button className={
            `
            flex rounded 
            border bg-cyan-800 
            px-3 py-1 
            w-fit
            items-center
            text-white
            hover:bg-cyan-900
            hover:text-white
            hover:border-cyan-800
            transition
            ${rest.className}
            ` 
        }
            type={type} 
            {...rest}
        >
            {children}
        </button>
    );
}

export default Secondary;