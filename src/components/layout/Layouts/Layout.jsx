// components-layout-wrap in all programmer
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="min-h-[700px]">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
