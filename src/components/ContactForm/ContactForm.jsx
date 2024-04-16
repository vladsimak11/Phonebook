import { addContact } from '../../redux/contacts/operations';
import {getContacts} from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { Form, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const contactsNameCheck = name => {
    return contacts.filter(contact => contact.name.includes(name));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;

    const contactsValue = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    }

    const check = contactsNameCheck(contactsValue.name);

    if (check.length <= 0) {
      dispatch(addContact(contactsValue));
    } else (
      
      toast.warn(`${contactsValue.name} is already in contacts`, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    )
    
    form.reset();
  };

  return (
  <Form onSubmit={handleSubmit}>
    <Label>
      Name
      <Input
        type="text"
        placeholder="Enter your name"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Label>

    <Label>
      Number
      <Input
        type="text"
        placeholder="Enter your number"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </Label>

    <Button type="submit">Add contact</Button>
  </Form>
)
}
