import { Pages } from "@/types/pages";
import classNames from "classnames";

type Props = Pages & {
  isLoggedIn?: boolean
}

export function Header({ pageName, isLoggedIn = true }: Props) {
  return (
    <header className={classNames("flex px-20  py-4 bg-cyan-800 text-white", {
      "justify-between": isLoggedIn,
      "justify-center": !isLoggedIn
    })}>
      {isLoggedIn ? (
        <>
        <span className="font-extrabold">CCIM</span>
        <ul className="flex gap-10">
          <li className={classNames({
            'font-bold': pageName === "Home"
          })}>
            <a href="">Home</a>
          </li>
          <li className={classNames({
            'font-bold': pageName === "Dashboard"
          })}>
            <a href="">Dashboard</a>
          </li>
          <li className={classNames({
            'font-bold': pageName === "Cartões"
          })}>
            <a href="">Cartões</a>
          </li>
          <li className={classNames({
            'font-bold': pageName === "Perfil"
          })}>
            <a href="">Perfil</a>
          </li>
          <li className={classNames({
            'font-bold': pageName === "Sair"
          })}>
            <a href="">Sair</a>
          </li>
        </ul>
       </>
      ): (
        <span className="font-bold">CCMI - Credit Card Installment Management</span>

      )}

    </header>
  );
}

export default Header;
