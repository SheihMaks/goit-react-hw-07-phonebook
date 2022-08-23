import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactsList,ContactListItem, DeleteItemButton, Span } from './Contacts.styled';
import { getFilter } from 'components/Redux/sliceContacts';
import { useDeleteContactMutation } from 'components/Redux/fetchContacts';

export const Contacts=({contacts})=>{
    const onFilter=useSelector(getFilter)

    const [deleteContact]=useDeleteContactMutation()
    
    const getContactsFiltered=()=>{
        const normalizedFilterName=onFilter.toLowerCase()
        return contacts.filter(el=> el.name.toLowerCase().includes(normalizedFilterName))
        }
        
    const contactsList = getContactsFiltered();

    return (<ContactsList>
        {contactsList.map((contact)=>{
            return (<ContactListItem key={contact.id}><Span>{contact.name}: {contact.phone}</Span>
            <DeleteItemButton type='button' onClick={()=>deleteContact(contact.id)}>Delete</DeleteItemButton >
            </ContactListItem>)})}
    </ContactsList>)
}

Contacts.propTypes={
    contacts:PropTypes.array.isRequired,
}