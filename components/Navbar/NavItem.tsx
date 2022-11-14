import Link from "next/link";
import React from "react";

interface nevItemStruct {
  name: string;
  to: string;
}
function NavItem(navItem: nevItemStruct) {
  return (
    <Link href={navItem.to}>
      <div className="nav_hover">{navItem.name}</div>
    </Link>
  );
}

export default NavItem;
