import { useState } from "react";

export const MenuItem = ({ link, nombreItem, children }) => {

  const [dropdown, setDropdown] = useState(false);

  const handleMenuItemClick = () => {
    setDropdown(!dropdown);
    document.getElementById("navbarNavDropdown").classList.remove("show");
  };

  return (
    <li className={`nav-item`}>
      {dropdown ? (
        <>
          <a
            className={`nav-link dropdown-toggle}`}
            href={link}
            onClick={handleMenuItemClick}
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {nombreItem}
          </a>
          <ul className="dropdown-menu">{children}</ul>
        </>
      ) : (
        <a
          className={`nav-link text-white`}
          onClick={handleMenuItemClick}
          aria-current="page"
          href={link}
        >
          {nombreItem}
        </a>
      )}
    </li>
  );
};
