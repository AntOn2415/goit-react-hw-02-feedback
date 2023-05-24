import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.options}>
      <button
        className={`${css.optionsBtn} ${css.goodBtn}`}
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        className={`${css.optionsBtn} ${css.neutralBtn}`}
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={`${css.optionsBtn} ${css.badBtn}`}
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
