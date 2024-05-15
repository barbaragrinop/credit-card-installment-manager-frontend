import { ButtonProps } from "@/types/button";

export function Primary({ children, type, ...rest }: ButtonProps) {
    return (
        <button className="flex bg-cyan-950" type={type} {...rest}>
            {children}
        </button>
    );
}

export default Primary;