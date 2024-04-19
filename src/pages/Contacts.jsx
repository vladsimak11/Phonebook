import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { fetchContacts } from "../redux/contacts/operations";
import { MainBlock, Header1, Header2 } from './Contacts.styled';

import {  getIsLoading } from "../redux/contacts/selectors";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import {ThreeDots} from '../Loader/Loader';

export default function Contacts() {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);  

  useEffect(() => { 
    dispatch(fetchContacts()); 
  }, [dispatch]);

  return (
    <div       
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        paddingTop: '60px',
      }}>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
        <MainBlock>
          <Header1>Phonebook</Header1>
          <ContactForm />
          <div>{isLoading && <ThreeDots />}</div>
          <Header2>Contacts</Header2>
          <Filter />
          <ContactList />
        </MainBlock>
    </div>
  );
}