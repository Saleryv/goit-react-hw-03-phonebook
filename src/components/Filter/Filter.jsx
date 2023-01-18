import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onChange, filter }) => {
  return (
    <div>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          onChange={onChange}
          value={filter}
          type="text"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};