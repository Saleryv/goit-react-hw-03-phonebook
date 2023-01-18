import { ContactItem } from './ContactItem/ContactItem';
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';

export const ContactList = ({ contacts, contactDelete }) => {
  console.log(contacts)
  return (
    <ul className={css.namesList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          id={id}
          key={id}
          name={name}
          number={number}
          contactDelete={contactDelete}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};