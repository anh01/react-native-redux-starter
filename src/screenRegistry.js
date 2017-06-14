import { Navigation } from 'react-native-navigation';

import Home from './views/Home';

const { registerComponent } = Navigation;

/**
 * This function registers and uniquely namespaces all layouts of the app.
 *
 * @param {object} store - Redux store
 * @param {class} provider - react-redux provider
 */
const registerScreens = (store, provider) => {
  registerComponent('Home', () => Home, store, provider);
};

export default registerScreens;
