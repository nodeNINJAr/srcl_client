import { useState } from "react";
import { Drawer, Menu, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { menuItems } from "../../../data/MenuItems";




// 
export default function MegaMenu() {
  const [open, setOpen] = useState(false);
  const [openKeys, setOpenKeys] = useState([]); // Control submenu open state for mobile

  // Handle submenu click behavior for mobile
  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold w-1/12">Brand</div>

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
      <Button className="lg:hidden" onClick={() => setOpen(true)}>
        <MenuOutlined />
      </Button>

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
