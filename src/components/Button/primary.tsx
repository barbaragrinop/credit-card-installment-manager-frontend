import { ButtonProps } from "@/types/button";

export function Primary({ children, type, ...rest }: ButtonProps) {
    return (
        <button type={type} {...rest}>
            {children}
        </button>
    );
}

export default Primary;