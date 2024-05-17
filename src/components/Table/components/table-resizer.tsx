import classNames from "classnames"
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
    isResizing: boolean;
}

export default function TableResizer({ isResizing, ...rest }: Props) {
    return (
        <div {...rest} className={classNames("absolute opacity-0 top-0 right-0",
            "h-full w-2 bg-gray-900 cursor-col-resize select-nonetouch-none rounded", 
            { "opacity-100 bg-green-700": isResizing }
        )}  />

    )
}
