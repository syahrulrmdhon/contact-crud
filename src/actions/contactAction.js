import axios from "axios";

export const getListContacts = () => async (dispatch) => {
  try {
    dispatch({
      type: "CONTACT_LIST_LOADING",
    });
    const res = await axios.get(
      `https://simple-contact-crud.herokuapp.com/contact`
    );

    dispatch({
      type: "CONTACT_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "CONTACT_LIST_FAIL",
    });
  }
};
