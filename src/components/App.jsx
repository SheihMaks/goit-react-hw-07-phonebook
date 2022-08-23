import React from "react";
import {PhonebookApp, HeaderApp, HeaderSectionContacts} from './Apps.styled'
import { ContactForm } from "./PhoneContactForm/ContactForm";
import {Contacts} from './Contacts/Contacts';
import { Filter } from "./UserFilter/Filter";
import {useGetContactsQuery} from './Redux/fetchContacts';

export const App=()=>{
  
  const {data:contacts}=useGetContactsQuery();
  
  return (<PhonebookApp>
      <HeaderApp>Phonebook</HeaderApp>
      <ContactForm 
      contactsList={contacts}
      />
      <HeaderSectionContacts>Contacts</HeaderSectionContacts>
      <Filter 
      title='Find contacts by name'
      />
      {contacts && <Contacts
      contacts={contacts}/>}
    </PhonebookApp>)
  }
