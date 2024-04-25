import styles from "./Notifications.module.css";
import PropTypes from 'prop-types';

function Notifications ({message}) {
  return <p className={styles.message}>{message}</p>
}

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notifications;