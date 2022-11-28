import Header from "./header";
import NavBar from "./nav-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex">
        <NavBar></NavBar>
        <section className="flex-1">
        <Header />
          {children}
        </section>
      </div>
    </>
  );
}
