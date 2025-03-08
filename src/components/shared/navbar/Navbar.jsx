import { useState } from "react";
import { Drawer, Menu, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { menuItems } from "../../../data/MenuItems";
import logo from "../../../assets/image/logo/SRC-logo.png"
import { Tooltip } from 'react-tooltip'

// 
export default function MegaMenu() {
  const [open, setOpen] = useState(false);
  const [openKeys, setOpenKeys] = useState([]); // Control submenu open state for mobile

  // Handle submenu click behavior for mobile
  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };
   

  // 
  return (
    <div className="bg-white shadow-md px-4 flex justify-between items-center font-roboto">
      <div title="jhkshhzss" className="text-4xl font-bold w-4/12 md:w-2/12 font-Poppins p-1 flex justify-start"><Tooltip id="my-tooltip"><a href={'/'}><img  className="w-16 h-16 xl:w-24 xl:h-24 mx-auto" src={logo} alt="SRCL" /></a></Tooltip></div>
      {/* Desktop Menu (Hover to open submenu) */}
      <div className="hidden lg:flex justify-end flex-1">
        <Menu 
          mode="horizontal" 
          items={menuItems} 
          className="border-0 -mr-3 flex-1 justify-end font-medium"
          triggerSubMenuAction="hover" // Enable hover for desktop
        />
      </div>

      {/* Mobile Menu Button */}
       <div className="lg:hidden" onClick={() => setOpen(true)}>
       <Button>
        <MenuOutlined />
      </Button>
       </div>

      {/* Mobile Drawer (Click to expand submenu below the item) */}
      <Drawer title="Menu" placement="left" onClose={() => setOpen(false)} open={open}>
        <Menu 
          mode="inline" 
          items={menuItems} 
          openKeys={openKeys} 
          onOpenChange={onOpenChange} // Handle submenu toggle
        />
      </Drawer>
    </div>
  );
}
