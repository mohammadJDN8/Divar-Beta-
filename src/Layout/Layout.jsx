import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function layout({ children }) {
  return (
    <>
      <Header />
      <div className="h-screen">{children}</div>
      <Footer />
    </>
  );
}

export default layout;
