import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

/**
 * Displays a greeting message.
 *
 * @returns {jsx}
 */
const GreeterText = ({ text }) => (
  <Text style={ styles.greetingText }> { text } </Text>
);

GreeterText.propTypes = {
  text: PropTypes.string.isRequired
};

export default GreeterText;
