import { useAuth } from "@/context/useAuth";
import { headerHeight } from "@/types/consts";
import { Pages } from "@/types/pages";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

type Props = Pages 

export function Header({ pageName,}: Props) {
  const { isLoggedIn, logout, user } = useAuth();
  const navigate = useNavigate()


  return (
    <div style={{minHeight: headerHeight}} className={classNames(`flex px-20 bg-cyan-800 items-center text-white`, {
      "justify-between": isLoggedIn,
      "justify-center": !isLoggedIn
    })}>
      {isLoggedIn ? (
        <>
        <span className="font-extrabold">CCIM - {user?.email}</span>
        <ul className="flex gap-10">
          <li key="Home"  className={classNames({
            'font-bold': pageName === "Home"
          })}>
            <a href="">Home</a>
          </li>
          <li key="Dashboard" className={classNames({
            'font-bold': pageName === "Dashboard"
          })}>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li key="Cartões" className={classNames({
            'font-bold': pageName === "Cartões"
          })}>
            <a href="/cards">Cartões</a>
          </li>
          <li key="Perfil" className={classNames({
            'font-bold': pageName === "Perfil"
          })}>
            <a href="/perfil">Perfil</a>
          </li>
          <li key="Sair" onClick={() => {
            if(isLoggedIn){
              logout()
              navigate("/")
            }
          }}>
            <a href="">Sair</a>
          </li>
        </ul>
       </>
      ): (
        <span className="font-bold">CCIM - Credit Card Installment Management</span>
      )}

    </div>
  );
}

export default Header;
