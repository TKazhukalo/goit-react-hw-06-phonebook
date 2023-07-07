import React from "react";
import PropTypes from 'prop-types';
import { Button, ContactItem, ListItem } from "./ContactsList.styled";
import { useDispatch, useSelector } from "react-redux";
import { visibleContacts } from "redux/selectors";
import { deleteContact } from "redux/contactsSlice";

export const ContactsList = () => {
  const contacts = useSelector(visibleContacts);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem key={id}>
            <span>
              {name}: {number}
            </span>
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </ContactItem>
        );
      })}
    </ListItem>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};