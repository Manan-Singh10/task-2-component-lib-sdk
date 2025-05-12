import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import clsx from "clsx";

function Header(className = "") {
  const baseStyles =
    "font-semibold text-lg sm:text-xl flex items-center gap-1 sm:gap-2";

  return (
    <Link to="/">
      <header className={clsx(baseStyles, className)}>
        <Logo />
        <span>Coding Conf</span>
      </header>
    </Link>
  );
}

export default Header;
