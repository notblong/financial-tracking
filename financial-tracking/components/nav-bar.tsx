import Image from "next/image";
import Collapse from "../assets/img.png";
import LogoImage from "../assets/logo.png";
import ChartImg from "../assets/Chart.png";

export default function NavBar() {
  return (
    <>
      <div className="navbar-play-contain">
        <div className={`w-64 duration-500 h-screen p-5 pt-8 bg-slate-900 relative md:w-30`}>
          <Image
            src={Collapse}
            alt="collasp"
            className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 bg-cyan-500`}
          />
          <div className="flex gap-x-4 items-center">
            <Image
              src={LogoImage}
              alt="play-logo"
              className={`cursor-pointer duration-500`}
            />
            <h1 className={`text-white origin-left font-medium text-xl duration-300`}>Develop</h1>
          </div>
          {/* ListItems */}
          <ul className="pt-6 menu">
            {/* Item1 */}
            <a href="/dashboard">
              <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md mt-2 menu-items`}
              >
                <Image src={ChartImg} alt="dashboard" />
                <span className={` origin-left duration-200`}>Dashboard</span>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
