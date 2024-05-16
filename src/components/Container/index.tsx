import { ReactNode } from "react";
import Header from "../Header";
import classNames from "classnames";
import { Pages } from "@/types/pages";

type Props = {
    children: ReactNode;
    pageName?: Pages["pageName"];
    hScreen?: boolean;
    isLoggedIn?: boolean;
}

export default function Container({ pageName = "", hScreen = true, children, isLoggedIn }: Props) {
  return (
    <div className="bg-gray-200 h-full flex flex-col">
        <Header pageName={pageName} isLoggedIn={isLoggedIn} />
        <div className="px-16 pt-10 h-full">
            { children }
        </div>
    </div>
  )
}
