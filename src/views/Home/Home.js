import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';
import GreeterText from '../../components/GreeterText';

/**
 * This has no reason to be a smart component. Only for demonstration purposes.
 */
class Home extends Component {

  render() {
    return (
      <View>
        <GreeterText> { this.props.greetingMessage } </GreeterText>

        <Button
          onPress={ () => this.props.changeGreetingText('Changed!') }
          title={ 'Click me to change the greeting' }
          color='#1abc9c'
        />
      </View>
    );
  }

}

export default Home;
