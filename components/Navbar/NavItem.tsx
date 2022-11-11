import React from "react";

interface nevItemStruct {
  name: string;
  to: string;
}
function NavItem(navItem: nevItemStruct) {
  return <div className="nav_hover">
    {navItem.name}
  </div>;
}

export default NavItem;
