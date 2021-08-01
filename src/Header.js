import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

const Header = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const signOut = async () => {
    try {
      await auth.signOut();
      dispatch(logout());
    } catch (error) {}
  };
  return (
    <div className="header flex items-center justify-between border-b border-gray-100 mt-1 space-x-10">
      {/* left side */}
      <div className="header__left flex items-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          className="h-6 object-contain"
          src="https://uploads-ssl.webflow.com/5d4c323a8620ae5cc5346818/5d8cb2e3e6f0c89071d07703_gmail-logo.png"
          alt=""
        />
      </div>
      {/* middle */}
      <div className="header__middle flex items-center flex-grow max-w-2xl p-1 rounded-md bg-gray-50">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          className="border-none w-full p-2 text-sm bg-transparent outline-none"
          placeholder="search mail"
          type="text"
        />
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
      {/* right */}
      <div className="header__right flex pr-3 items-center">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar
          className="cursor-pointer"
          onClick={() => signOut()}
          src={user?.photoUrl}
        />
      </div>
    </div>
  );
};

export default Header;
