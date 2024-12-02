import AppBar from "../AppBar/AppBar";
import Modal from "../Modal/Modal";

import ChangeCard from "../ChangeCard/ChangeCard";
import { useSelector } from "react-redux";
import { selectModal } from "../../redux/modal/selectors";

const Layout = ({ children }) => {
  const modalOpen = useSelector(selectModal);

  return (
    <>
      <AppBar />
      <section>{children}</section>
      {modalOpen && (
        <Modal>
          <ChangeCard />
        </Modal>
      )}
    </>
  );
};

export default Layout;
/*close={() => setModalOpen(false)*/
