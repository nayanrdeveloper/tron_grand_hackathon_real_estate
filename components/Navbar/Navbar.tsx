import React, { useState } from "react";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import { shortAddress } from "../../utils/shortAddress";


declare global {
  interface Window {
    tronWeb?: any;
    tronLink?: any;
  }
}

function Navbar() {
  interface nevItemStruct {
    name: string;
    to: string;
  }
  const navItemList: nevItemStruct[] = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Listing",
      to: "/listings",
    }
  ];

  const [address, setAddress] = useState<string>("");

  const connectWallet = async () => {
    if (typeof window) {
      if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
        console.log("connected");
        
        alert("Already wallet connected");
        setAddress(window.tronWeb.defaultAddress.base58);
      } else {
        const walletMessage = await window.tronLink.request({ method: "tron_requestAccounts" });
        console.log("not connected");
      }
    }
  };

  return (
    <div className="container py-2 px-5 bg-white">
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
        {address ? (
          <div className="connect_wallet">{shortAddress(address)}</div>
        ) : (
          <button onClick={connectWallet} className="connect_wallet">
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
