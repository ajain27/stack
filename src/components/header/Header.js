import "./Header.css";

import Logo from "../../icons/stackline-logo.png";

function Header() {
  return (
    <>
      <div fixed="top" className="stackline-nav">
        <img src={Logo} alt={Logo} className="logo ml-3 mt-2 p-2" />
      </div>
    </>
  );
}

export default Header;
