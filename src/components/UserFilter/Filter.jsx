import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import { useDispatch,useSelector } from 'react-redux';
import { LabelFilter } from "./Filter.styled"
import { Input } from "../PhoneContactForm/ContactForm.styled";
import { setFilter,getFilter } from 'components/Redux/sliceContacts';

export const Filter=({title})=>{
    const filterId=nanoid();
    const dispatch=useDispatch()
    const onFilter=useSelector(getFilter) 

    return (<><LabelFilter htmlFor={filterId}>{title}</LabelFilter>
    <Input
    type='text' 
    name='filter' 
    onChange={(e)=>dispatch(setFilter(e.currentTarget.value))} 
    value={onFilter}
    id={filterId}
    /></>)}

    Filter.propTypes={
        title:PropTypes.string.isRequired,
    }