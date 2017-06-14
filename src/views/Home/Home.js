import React, { Component } from 'react';
import { View, Button } from 'react-native';

import styles from './styles';
import GreeterText from '../../components/GreeterText';

/**
 * This has no reason to be a smart component. Only for demonstration purposes.
 */
class Home extends Component {

  render() {
    return (
      <View style={ styles.wrapper }>
        <GreeterText> { this.props.greetingMessage } </GreeterText>

        <Button
          onPress={ () => this.props.changeGreetingText('Changed!') }
          title={ 'Click me to change the greeting' }
          color='#1abc9c'
        />

        <Button
          onPress={ () => this.props.changeGreetingText('Hello World!') }
          title={ 'Click me to change the greeting back' }
          color='#1abc9c'
        />
      </View>
    );
  }

}

export default Home;
