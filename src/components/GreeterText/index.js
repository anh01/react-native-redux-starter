import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

/**
 * Displays a greeting message.
 *
 * @returns {jsx}
 */
const GreeterText = ({ children }) => (
  <Text style={ styles.greetingText }> { children } </Text>
);

GreeterText.propTypes = {
  text: PropTypes.string.isRequired
};

export default GreeterText;
