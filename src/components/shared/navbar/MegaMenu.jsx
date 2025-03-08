import { useState } from "react";
import logo from "../../../assets/image/logo/SRC-logo.png";
import { menuItems } from "../../../data/MenuItems";


// 
export default function MegaMenu() {
  const [open, setOpen] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleSubmenuClick = (key) => {
    if (openKeys.includes(key)) {
      setOpenKeys(openKeys.filter(k => k !== key));
    } else {
      setOpenKeys([...openKeys, key]);s
    }
  };

  // 
  return (
    <div className="bg-[#0E0E0E] shadow-md px-4 flex justify-between items-center font-roboto">
      <div className="text-4xl font-bold w-4/12 md:w-1/12 font-Poppins p-1 flex justify-start">
        <a href="/">
          <img className="w-16 h-16 xl:w-20 xl:h-20 mx-auto" src={logo} alt="SRCL" />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-end flex-1 items-center">
        <ul className="flex space-x-1 flex-wrap justify-end items-center cursor-pointer space-y-1">
          {menuItems?.map(item => (
            <li key={item.key} className="relative group px-2">
              <span className="hover:text-blue-500 truncate text-sm font-Albert font-semibold text-white uppercase">{item.label}</span>
              {item.children && (
                <ul className="absolute hidden group-hover:block bg-white font-medium p-1 rounded-lg shadow-lg mt-1 cursor-pointer z-50">
                  {item.children?.map(child => (
                    <li key={child.key}><span className="block px-2 py-2 hover:bg-gray-100 text-sm truncate">{child.label}</span></li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={toggleDrawer} className="p-2 text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleDrawer}>
          <div className="fixed inset-y-0 left-0 w-64 bg-white p-4" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul>
              {menuItems.map(item => (
                <li key={item.key}>
                  <a href={`#${item.key}`} className="block py-2 hover:bg-gray-100" onClick={() => handleSubmenuClick(item.key)}>
                    {item.label}
                  </a>
                  {item.children && openKeys.includes(item.key) && (
                    <ul className="pl-4">
                      {item.children.map(child => (
                        <li key={child.key}>
                          <a href={`#${child.key}`} className="block py-2 hover:bg-gray-100">{child.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}