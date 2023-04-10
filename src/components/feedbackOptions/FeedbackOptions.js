import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul className={css.list}>
        {options.map(key => (
          <li key={key}>
            <button
              className={css.button}
              onClick={() => {
                onLeaveFeedback(key);
              }}
            >
              {key}
            </button>
          </li>
        ))}
        {/* <li>
          <button
            className={css.button}
            onClick={() => {
              onLeaveFeedback('good');
            }}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className={css.button}
            onClick={() => {
              onLeaveFeedback('neutral');
            }}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            className={css.button}
            onClick={() => {
              onLeaveFeedback('bad');
            }}
          >
            Bad
          </button>
        </li> */}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
