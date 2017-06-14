import { connect } from 'react-redux';

import Home from './Home';
import * as greetingsActions from '../../actions/greetingsActions';

const mapStateToProps = (state) => ({
  greetingMessage: state.greeting.message
});

const mapDispatchToProps = (dispatch) => ({
  changeGreetingText: text => dispatch(greetingsActions.sayHi(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

