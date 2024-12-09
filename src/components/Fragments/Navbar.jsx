import { NavLink } from "react-router-dom";
import { Icon } from "../Elements/Icon";
import Logo from "../Elements/Logo";
// import React, { useContext } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

const Navbar = () => {
  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];
  
  const { theme, setTheme } = useContext(ThemeContext);

  const menus = [
    {
      id: "overview",
      link: "/",
      icon: <Icon.Overview />,
      label: "Overview",
    },
    {
      id: "balance",
      link: "/balance",
      icon: <Icon.Balance />,
      label: "Balance",
    },
    {
      id: "transaction",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Transaction",
    },
    {
      id: "bills",
      link: "/bills",
      icon: <Icon.Bills />,
      label: "Bills",
    },
    {
      id: "expense",
      link: "/expense",
      icon: <Icon.Expencces />,
      label: "Expenses",
    },
    {
      id: "goals",
      link: "/goal",
      icon: <Icon.Goals />,
      label: "Goals",
    },
    {
      id: "setting",
      link: "/setting",
      icon: <Icon.Settings />,
      label: "Settings",
    },
  ];

  return (
    <div className="bg-defaultBlack">
    <nav className="sticky top-0 text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
      <div>
        <NavLink to="/" className="flex justify-center mb-10">
          <Logo variant="text-primary text-sm sm:text 2x1"/>
        </NavLink>
        {menus.map((menu) => (  
          <NavLink
                key={menu.id}
                to={menu.link}
                className={({ isActive }) =>   
                    isActive
                        ? "flex bg-primary text-white font-bold px-4 py-3 rounded-md"
                        : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md"
                  }>
                <div className="mx-auto sm:mx-0">{menu.icon}</div>
                <div className="ms-3 hidden sm:block">{menu.label}</div>
          </NavLink>
        ))}
      </div>
      
      <div className="md:flex md:gap-2">
          Themes
          {themes.map((t) => (
            <div
              key={t.name}
              className={`${t.bgcolor} md:w-6 h-6 rounded-md cursor-pointer mb-2`}
              onClick={() => setTheme(t)}
            ></div>
          ))}
        </div>
      <div className="sticky bottom-12">
        <div className="flex bg-special-bg3 px-4 py-3 rounded-md hover:text-white">
	          <div className="mx-auto sm:mx-0 text-primary">
              <Icon.Logout/>
            </div>
	          <div className="ms-3 hidden sm:block">Logout</div>
	        </div>
        <div className="border-b my-10 border-b-special-bg"></div>
        <div className="flex justify-between">
          <div className="mx-auto sm:mx-0 self-center">
            <img class="w-10 h-10 rounded-full object-cover" src="images/profile.png"/>
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-bold">Username</div>
            <div className="text-xs">View Profile</div>
          </div>
          <div className="hidden sm:block self-center justify-self-end">
            <Icon.KebabMenu/>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;