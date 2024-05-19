import { ButtonProps } from "@/types/button";

export function Primary({ children, type, ...rest }: ButtonProps) {
    return (
        <button className={
            `
            flex rounded 
            border border-cyan-800 
            px-3 py-1 
            text-cyan-800
            w-fit
            items-center
            hover:bg-cyan-800
            hover:text-white
            hover:border-cyan-800
            transition
            ` 
        }
            type={type} 
            {...rest}
        >
            {children}
        </button>
    );
}

export default Primary;