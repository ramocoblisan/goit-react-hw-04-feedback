import styles from "./FeedbackOptions.module.css";
import PropTypes from 'prop-types';

function FeedbackOptions({options, onLeaveFeedback}) {
  return (
    <div className={styles.feedbackContainer}>
      {
        options.map((option,index) =>(
          <button 
            key={index} 
            name={option}
            onClick={onLeaveFeedback}
            className={styles.btn} 
            type='button'>
              {option}
          </button>
      ))}
    </div>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;