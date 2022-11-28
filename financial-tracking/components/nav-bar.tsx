import Image from "next/image";
import Collapse from "../assets/img.png";
import LogoImage from "../assets/logo.png";
import ChartImg from "../assets/Chart.png";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(true);
  const onCollapse = () => setOpen(preVal => !preVal);

  return (
    <>
      <div className="navbar-play-contain">
        <div className={`${open ? 'w-64' : 'w-20'} duration-500 h-screen p-5 pt-8 bg-slate-900 relative md:w-30`}>
          <Image
            src={Collapse}
            alt="collapse"
            className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 bg-cyan-500 ${!open && 'rotate-180'}`}
            onClick={onCollapse}
          />
          <Link href="/">
            <div className="flex gap-x-4 items-center">
              <Image
                src={LogoImage}
                alt="play-logo"
                className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`}
              />
              <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'hidden'}`}>MoneyGo</h1>
            </div>
          </Link>
          <ul className="pt-6 menu">
            <Link href="/dashboard">
              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md mt-2 menu-items`}
              >
                <Image src={ChartImg} alt="dashboard" />
                <span className={` origin-left duration-200 ${!open && 'hidden'}`}>Dashboard</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
