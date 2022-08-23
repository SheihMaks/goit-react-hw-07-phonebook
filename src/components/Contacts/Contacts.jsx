import { ContactsList,ContactListItem, DeleteItemButton, Span } from './Contacts.styled';
import {getFilter} from 'components/Redux/sliceContacts';
import { useGetContactsQuery,useDeleteContactMutation } from 'components/Redux/fetchContacts';
import { useSelector } from 'react-redux';

export const Contacts=()=>{
    const onFilter=useSelector(getFilter)
    const {data:contacts}=useGetContactsQuery()
    const [deleteContact]=useDeleteContactMutation()
    
    const getContactsFiltered=()=>{
        if(!contacts)return;
        const normalizedFilterName=onFilter.toLowerCase()
        return contacts.filter(el=> el.name.toLowerCase().includes(normalizedFilterName))
        }
        
    const contactsList = getContactsFiltered();

    return (<ContactsList>
        {contactsList && contactsList.map((contact)=>{
            return (<ContactListItem key={contact.id}><Span>{contact.name}: {contact.phone}</Span>
            <DeleteItemButton type='button' onClick={()=>deleteContact(contact.id)}>Delete</DeleteItemButton >
            </ContactListItem>)})}
    </ContactsList>)
}