import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Row } from "reactstrap";
import { getListContacts } from "../actions/contactAction";
import CardContact from "../components/CardContact";

const ContactPage = () => {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);

  const fetchContacts = () => {
    dispatch(getListContacts());
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <React.Fragment>
      <h1>Contact</h1>
      <Row style={{ margin: "0 10%" }}>
        {contact &&
          contact.data &&
          contact.data.length > 0 &&
          contact.data.map((item) => <CardContact item={item} />)}
      </Row>
      {contact && contact.loading && <Spinner color="primary" />}
    </React.Fragment>
  );
};

export default ContactPage;
