import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const navItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Categories",
    url: "/categories",
  },
  {
    label: "About Us",
    url: "https://shadowctrl.me",
    newPage: true,
  },
];

const Navbar: NextPage<Props> = ({}) => {
  return (
    <div className="fixed top-0 w-full flex justify-between items-center px-[2vw] py-[2vh] border-b border-pri-col bg-black/20 backdrop-blur-[5px] z-10">
      <Link href="/" className="cursor-pointer flex items-center gap-[2px]">
        <Image src="/assets/logo.svg" alt="shadowctrl" width={20} height={20} />
        <h1 className="font-mars font-black text-[18px] text-pri-col tracking-[-6px] pt-[0.5vh]">
          Shadowctrl &nbsp; Blogs
        </h1>
      </Link>

      <div className="text-[#e8dcdc]">
        <ul className="flex justify-end items-center list-none">
          {navItems.map((item, index) => (
            <Link
              href={item.url}
              key={item.url}
              target={item.newPage ? "_blank" : "_self"}
              className="mr-[1vw] last:mr-0 text-[12px] font-medium font-mars hover:animate-bounce hover:text-pri-col group"
            >
              <span className="text-pri-col text-[16px] mr-[1px] group-hover:text-pri-col">
                #
              </span>
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
