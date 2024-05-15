export function Header() {
  return (
    <header className="flex px-20 justify-between py-4 bg-cyan-800 text-white">
      <span className="font-extrabold">CCIM</span>
      <ul className="flex gap-10">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Dashboard</a>
        </li>
        <li>
          <a href="">Cartões</a>
        </li>
        <li>
          <a href="">Perfil</a>
        </li>
        <li>
          <a href="">Sair</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
