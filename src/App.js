import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import { Navigation } from 'react-native-navigation';

import configureStore from './configureStore';
import registerScreens from './screenRegistry';

const store = configureStore();

registerScreens(store, Provider);
persistStore(store, { storage: AsyncStorage });

const startApp = () => {
  const options = {
    screen: {
      screen: 'Home',
      title: 'Home'
    }
  };

  Navigation.startSingleScreenApp(options);
};

startApp();
