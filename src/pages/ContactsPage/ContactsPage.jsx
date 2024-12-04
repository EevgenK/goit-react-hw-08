import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import LoaderApi from "../../components/LoaderApi/LoaderApi";
import ContactList from "../../components/ContactList/ContactList";
import { Box } from "@mui/material";
import s from "./ContactsPage.module.css";
const ContactsPage = () => {
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("effect");
    dispatch(fetchContacts());
  }, [dispatch]);
  console.log("render");
  return (
    <Box
      component="section"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        p: 2,
        backgroundColor: "var(--main--bg-color)",
      }}
    >
      <div className="container">
        <h1 className={s.title}>
          Phone<span> book</span>
        </h1>
        <ContactForm />
        <SearchBox />
        {loading ? <LoaderApi /> : <ContactList />}
      </div>
    </Box>
  );
};

export default ContactsPage;
