import React from "react";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";

function Navbar() {
  interface nevItemStruct {
    name: string;
    to: string;
  }
  const navItemList: nevItemStruct[] = [
    {
      name: "Home",
      to: "",
    },
    {
      name: "Listing",
      to: "",
    },
    {
      name: "Property",
      to: "",
    },
  ];
  return (
    <div className="container py-2 px-5">
      <div className="flex justify-between">
        <div>
          <NavLogo />
        </div>
        <div>
          <ul className="flex gap-2">
            {navItemList.map((navItem) => {
              return (
                <li key={navItem.name}>
                  <NavItem {...navItem} />
                </li>
              );
            })}
          </ul>
        </div>
        <button className="connect_wallet">Connect Wallet</button>
      </div>
    </div>
  );
}

export default Navbar;
