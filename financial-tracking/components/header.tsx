import NavBar from "./nav-bar";
import ThemeButton from "./theme-button";

export default function Header() {
  return (
    <>
      <div className="header flex justify-end border-b">
          <ThemeButton />
      </div>
    </>
  );
}