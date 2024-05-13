import { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import { AnimatePresence, motion } from "framer-motion";

// logo-image
import image from "../../assets/images/logo.jpg";

//data-title
import { topMenuTitle } from "../../localdata/data";

//component hamburger menu
import HamburgerMenu from "../module/HamburgerMenu";

//icons
import { FiMenu } from "react-icons/fi";

function TopMenu() {
  const { hamburgrMenu, setHamburgerMenu } = useContext(Context);

  return (
    <div className="bg-[#FFFF] z-[10000] p-2 max-w-[1590px] mx-auto flex items-center justify-between fixed left-0 right-0 top-0 shadow-sm shadow-gray-300">
      <div className="flex items-center w-[400px] lg:mr-[6rem]">
        {/* hamburger menu */}
        <div className="relative">
          <FiMenu
            onClick={() => setHamburgerMenu(!hamburgrMenu)}
            size={25}
            className="lg:hidden cursor-pointer"
          />
          <AnimatePresence>
            {hamburgrMenu && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ ease: "easeOut" }}
                className={`absolute top-0  right-0 left-0 lg:hidden transition-all ${
                  hamburgrMenu && "overlay"
                }`}
              >
                <HamburgerMenu />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <img
          className="w-[110px] rounded-full cursor-pointer"
          src={image}
          alt="logo"
        />
        <ul className="flex items-center gap-14">
          {topMenuTitle.map((item) => (
            <li
              className="text-sm hover:border-b-2 p-1 border-gray-800 duration-100 font-bold text-gray-800 cursor-pointer hidden lg:block"
              key={item.id}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex lg:gap-7 gap-5 w-[300px]">
        <button className="lg:w-[100px] w-[80px] hover:scale-105 duration-300 lg:p-2 p-1 text-sm rounded-full bg-orange-500 text-white">
          شاتل
        </button>
        <button className="lg:w-[100px] w-[80px] hover:scale-105 duration-300 lg:p-2 p-1 text-sm rounded-full bg-gray-800 text-white">
          نماوا
        </button>
      </div>
    </div>
  );
}

export default TopMenu;
