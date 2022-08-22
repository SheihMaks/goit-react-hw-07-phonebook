import { ContactsList,ContactListItem, DeleteItemButton, Span } from './Contacts.styled';
import { useDispatch,useSelector } from 'react-redux';
import { deleteContact } from 'components/Redux/sliceContacts';
import {getContacts,getFilter} from 'components/Redux/sliceContacts';

export const Contacts=()=>{
    const dispatch=useDispatch();
    const onFilter=useSelector(getFilter)
    const contacts=useSelector(getContacts)
    
    const getContactsFiltered=()=>{
        const normalizedFilterName=onFilter.toLowerCase()
        return contacts.filter(el=> el.name.toLowerCase().includes(normalizedFilterName))
        }
        
    const contactsList = getContactsFiltered();

    return (<ContactsList>
        {contactsList.map((contact)=>{
            return (<ContactListItem key={contact.id}><Span>{contact.name}: {contact.number}</Span>
            <DeleteItemButton type='button' onClick={()=>dispatch(deleteContact(contact.name))}>Delete</DeleteItemButton >
            </ContactListItem>)})}
    </ContactsList>)
}