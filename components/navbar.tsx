import Image from "next/image";
import React from "react";
import SearchBar from "./search-bar";
import MyAccount from "./my-account";
import { Heart, ShoppingCart, TruckElectric } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import NavHoverMenu from "./nav-hover-menu";

const Navbar = () => {
  return (
    <div className="flex  px-6 border-b-3 rounded-2xl justify-between w-full gap-4">
      <div className=" flex flex-col items-center justify-center  cursor-pointer">
        <Image src="/computer.svg" alt="Logo" width={50} height={50} />
        <p className="font-bold text-lg hidden lg:flex items-center justify-center text-center">
          Genz
          <span className="ml-2 text-red-500 font-bold">Computers</span>
        </p>
      </div>
      <div className="hidden lg:flex items-center justify-center gap-12">
        <NavHoverMenu label="Products" items={["Option 1", "Option 2"]} />
        <NavHoverMenu label="Pre-Built PC" items={["Gaming", "Office"]} />
        <NavHoverMenu
          label="Custom PC"
          items={["Build Your Own", "Consult Expert"]}
        />
        <NavHoverMenu
          label="Gamers Choice"
          items={["Top Rated", "New Arrivals"]}
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <SearchBar />
        <ThemeToggle />
      </div>
      <MyAccount />
      <div className="flex items-center justify-center gap-4">
        <TruckElectric className="md:w-8 md:h-8" />

        {/* <Button className="h-12" variant="outline">
          <LayoutDashboard className="h-4 w-4 mr-1" />

          Go to Dashboard</Button> */}
        <Heart className="md:h-8 md:w-8" />
        <ShoppingCart className="md:h-8 md:w-8" />
      </div>
    </div>
  );
};

export default Navbar;
