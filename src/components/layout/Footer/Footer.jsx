import React from "react";

import { footerMenu } from "../../../localdata/data";

function Footer() {
  const sliceFoooter1 = footerMenu.slice(0, 4);
  const sliceFoooter2 = footerMenu.slice(4, 7);

  console.log(sliceFoooter1);
  return (
    <div className="bg-[#FFFF] h-[200px] border-t-[1px] border-gray-200 p-4 max-w-[1600px] mx-auto flex justify-between">
      <div className="mr-8">
        <ul className="flex flex-col gap-4 justify-center h-[140px]">
          {sliceFoooter1.map((item) => (
            <li className="font-bold md:text-sm text-[13px] cursor-pointer lg:mr-9 mr-0">
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="ml-8">
        <ul className="flex flex-col justify-center h-[125px]">
          {sliceFoooter2.map((item) => (
            <div className="flex items-center justify-between lg:ml-9 ml-0">
              <li className="text-center md:text-sm text-[13px] cursor-pointer font-bold text-gray-900 w-[120px]">
                {item.title}
              </li>
              <div className="p-2">
                <li className="bg-orange-600 cursor-pointer w-[30px] h-[30px] rounded-full text-white flex flex-col items-center justify-center">
                  {item.icon}
                </li>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
