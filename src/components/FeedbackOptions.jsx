import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeeback }) => {
  return (
    <div>
      {Object.keys(options).map(option => (
        <button
          type="button"
          key={option}
          onClick={() => onLeaveFeeback(option)}
          style={{
            textTransform: 'capitalize',
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeeback: PropTypes.func.isRequired,
};
