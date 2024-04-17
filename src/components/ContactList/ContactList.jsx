import {List, Item, Info, Button } from './ContactList.styled';
import {deleteContact} from '../../redux/contacts/operations';
import {useSelector, useDispatch } from "react-redux";
import {getContacts, getFilterValue} from '../../redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const getVisibleContact = () => {
  const normalizedFilter = filterValue.toLowerCase();
  
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };
  
  const visibleContact = getVisibleContact();
  
  return (
    <List>
        {visibleContact.map(({_id, name, number}) => {
          return (
            <Item key={_id}>
              <Info>{name}: {number}</Info>
              <Button
                onClick={() => dispatch(deleteContact(_id))}
              >
                Delete
              </Button>
            </Item>
          )
        })}
      </List>
  )
}
