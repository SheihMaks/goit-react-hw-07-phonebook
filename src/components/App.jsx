import React from "react";
import {PhonebookApp, HeaderApp, HeaderSectionContacts} from './Apps.styled'
import { ContactForm } from "./PhoneContactForm/ContactForm";
import {Contacts} from './Contacts/Contacts';
import { Filter } from "./UserFilter/Filter";
import { nanoid } from "nanoid";
import {useGetContactsQuery,useAddContactsMutation} from './Redux/fetchContacts'

export const App=()=>{
  const filterId=nanoid();
  const {data:contacts}=useGetContactsQuery();
  const [addContacts]=useAddContactsMutation();

const formHandleSubmit=(data) => {
  data={
    name:data.name,
    number:data.number,
    id:nanoid()
  }

  if (contacts.find(el=>el.name===data.name)){
  window.alert(`${data.name} is already in contacts`) } 
  else{addContacts(data)}
}

return (<PhonebookApp>
      <HeaderApp>Phonebook</HeaderApp>
      <ContactForm 
      onSubmit={formHandleSubmit}
      />
      <HeaderSectionContacts>Contacts</HeaderSectionContacts>
      <Filter 
      title='Find contacts by name'
      id={filterId}
      />
      <Contacts/>
    </PhonebookApp>)
  }
