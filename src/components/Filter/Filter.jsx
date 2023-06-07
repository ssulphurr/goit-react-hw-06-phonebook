import { nanoid } from 'nanoid';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const filterId = nanoid();

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = e => dispatch(setFilter(e.target.value));

  return (
    <div className={css.filter__container}>
      <label className={css.label} htmlFor={filterId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={handleFilterChange}
        id={filterId}
      />
    </div>
  );
};
export default Filter;
