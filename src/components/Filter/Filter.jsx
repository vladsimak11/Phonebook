import { useSelector, useDispatch } from 'react-redux';
import {Label, Input} from './Filter.styled';
import {getFilterValue} from '../../redux/contacts/selectors';
import {filterContacts} from '../../redux/contacts/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(getFilterValue);

  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(filterContacts(event.target.value));
  }

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        placeholder="Enter your name"
        name="filter"
        value = {filterValue}
        onChange={handleFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
    </Label>
  )
}