/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import App2 from './src/App2';
import App3 from './src/sayac';
AppRegistry.registerComponent(appName, () => App3);
