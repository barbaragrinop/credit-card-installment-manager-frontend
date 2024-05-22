import { ReactNode } from "react";
import Header from "../Header";
import { Pages } from "@/types/pages";

type Props = {
  children: ReactNode;
  pageName?: Pages["pageName"];
}

export default function Container({ pageName = "", children }: Props) {

  return (
    <div className="bg-gray-200 min-h-full flex flex-col">
      <Header pageName={pageName}/>
      <div className="px-16 pt-10 h-full">
        {children}
      </div>
    </div>
  )
}
