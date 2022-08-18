import React from "react";
import {PhonebookApp, HeaderApp, HeaderSectionContacts} from './Apps.styled'
import { ContactForm } from "./PhoneContactForm/ContactForm";
import {Contacts} from './Contacts/Contacts';
import { Filter } from "./UserFilter/Filter";
import { nanoid } from "nanoid";
import { useSelector,useDispatch } from "react-redux";
import {setContacts,getContacts, getFilter} from './Redux/sliceContacts';

export const App=()=>{
  const dispatch=useDispatch()
  const contacts=useSelector(getContacts)
  const onFilter=useSelector(getFilter)
  const filterId=nanoid();

const formHandleSubmit=(data) => {
  data={
    name:data.name,
    number:data.number,
    id:nanoid()
  }
  if (contacts.find(el=>el.name===data.name)){
  window.alert(`${data.name} is already in contacts`) } 
  else{ 
 const myContacts=()=>dispatch(setContacts(data))
 myContacts()
  }
}

const getContactsFiltered=()=>{
  const normalizedFilterName=onFilter.toLowerCase()
  return contacts.filter(el=> el.name.toLowerCase().includes(normalizedFilterName))
}
  
  const contactsList = getContactsFiltered();

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
      <Contacts 
      contactsList={contactsList}
      />
    </PhonebookApp>)
  }
