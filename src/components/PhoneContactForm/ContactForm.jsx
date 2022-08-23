import {useState} from "react";
import PropTypes from 'prop-types'
import { nanoid } from "nanoid";
import {useAddContactsMutation} from 'components/Redux/fetchContacts';
import { ContactFormContainer,Button,Form,LabelOfInputName,Input, LabelOfInputPhone } from "./ContactForm.styled";

export const ContactForm =({contactsList})=>{
  const [name,setName]=useState('');
  const [number,setNumber]=useState('');
  const inputNameId=nanoid();
  const inputNumberId=nanoid();

  const [addContacts]=useAddContactsMutation();

  const formHandleSubmit=(data) => {
    data={
      name:data.name,
      number:data.number,
      id:nanoid()
    } 

  if (contactsList.find(el=>el.name===data.name)){
    window.alert(`${data.name} is already in contacts`) } 
    else{addContacts(data)}
  }

const onHandleInput=(e)=>{
  const {name,value}=e.currentTarget
    switch (name){
      case 'name': setName(value)
      break;
      case 'number':setNumber(value)
      break;
      default: window.alert('Такой тип ввода не обрабатывается')
    }}
  
  const onHandleSubmit=(e)=>{
    e.preventDefault()
    formHandleSubmit({name,number})
  reset()
  }

  const reset=()=>{
    setName('')
    setNumber('')
}

return(<ContactFormContainer><Form onSubmit={onHandleSubmit}><LabelOfInputName htmlFor={inputNameId}>Name</LabelOfInputName>
    <Input
  type="text"
  name="name"
  value={name}
  onChange={onHandleInput}
  id={inputNameId}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<LabelOfInputPhone htmlFor={inputNumberId}>Number</LabelOfInputPhone>
<Input
  type="tel"
  name="number"
  value={number}
  onChange={onHandleInput}
  id={inputNumberId}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
<Button type='submit'>Add contact</Button></Form></ContactFormContainer>)
}

ContactForm.propTypes={
  contactsList:PropTypes.array,
}