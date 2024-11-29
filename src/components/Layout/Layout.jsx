import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <section>{children}</section>
    </>
  );
};

export default Layout;
