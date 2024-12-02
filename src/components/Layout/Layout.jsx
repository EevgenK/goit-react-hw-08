import { useState } from "react";
import AppBar from "../AppBar/AppBar";
import Modal from "../Modal/Modal";
import AuthNav from "../AuthNav/AuthNav";

const Layout = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <AppBar openModal={() => setModalOpen(true)} />
      <section>{children}</section>
      {modalOpen && (
        <Modal close={() => setModalOpen(false)}>
          <div className="decor">
            <AuthNav />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Layout;
