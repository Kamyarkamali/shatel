import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoChatbubbleSharp } from "react-icons/io5";

const topMenuTitle = [
  { id: 1, title: "پیشنهادات", paths: "/" },
  { id: 2, title: "خرید", paths: "/" },
  { id: 3, title: "توضیحات", paths: "/" },
  { id: 4, title: "تماس", paths: "/" },
];

export const footerMenu = [
  { id: 1, title: "پیشنهاد های جشنواره", paths: "/" },
  { id: 2, title: "درباره پیشنهاد", paths: "/" },
  { id: 3, title: "توضیحات بیشتر", paths: "/" },
  { id: 4, title: "ارتباط با ما", paths: "/" },
  { id: 5, title: "91000000", paths: "/", icon: <FaPhoneAlt /> },
  {
    id: 6,
    title: "info@shatel.ir",
    paths: "/",
    icon: <MdOutlineMailOutline />,
  },
  { id: 7, title: "گفت و گوی آنلاین", paths: "/", icon: <IoChatbubbleSharp /> },
];

export { topMenuTitle };
