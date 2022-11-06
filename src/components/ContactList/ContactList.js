import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';
import { List } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(filter);
  console.log(contacts);
  const normalizeFilter = filter && filter.toLowerCase();
  const newContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  // const newContacts = getNewContacts();8787878721512121

  return (
    <List>
      {newContacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </List>
  );
};
ContactList.propTypes = {
  contact: PropTypes.shape({
    key: PropTypes.string.isRequired,
  }),
};

export default ContactList;
