import { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import { topMenuTitle } from "../../localdata/data";

// icons
import { IoMdClose } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

function HamburgerMenu() {
  const { hamburgrMenu, setHamburgerMenu } = useContext(Context);

  return (
    <div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`bg-[#1B162D] w-full h-[240px]`}
    >
      <div className="bgHamburgerMenu p-4 flex items-center justify-between">
        <div className="border-[1px] inline-block p-1 w-[33px] flex justify-center rounded-md">
          <IoMdClose
            onClick={() => setHamburgerMenu(!hamburgrMenu)}
            size={20}
            color="white"
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-1 text-white">
          <MdLocalPhone size={18} />
          <p>91000000 (021) </p>
        </div>
      </div>
      <ul className="flex flex-col gap-4 text-[#FFFF] text-sm justify-center h-[160px] mr-3">
        {topMenuTitle.map((item) => (
          <li
            className="border-b-[1px] mb-[-10px] cursor-pointer border-gray-600 p-[8px] text-start"
            key={item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HamburgerMenu;
